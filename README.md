[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842563&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

### TITLE
Description

The characters in my alPphabet are composed of bezier curve shapes. The solid shape creates the dominant downstroke, and the lined shape forms the secondary part.

The coordinates of the two anchor points and two control points are all controlled by parameters, totalling eight parameters for each of the bezier shapes. Therefore I have used 16 parameters, which is slightly more than the recommended.

The 16 parameters per letter are:

'oneVar1' : Lined bezier first anchor point X
'oneVar2' : Lined bezier first anchor point Y
'oneVar3' : Lined bezier first control point X
'oneVar4' : Lined bezier first control point Y
'oneVar5' : Lined bezier second control point X
'oneVar6' : Lined bezier second control point Y
'oneVar7' : Lined bezier second anchor point X
'oneVar8' : Lined bezier second anchor point Y

'twoVar1' : Solid bezier first anchor point X
'twoVar2' : Solid bezier first anchor point Y
'twoVar3' : Solid bezier first control point X
'twoVar4' : Solid bezier first control point Y
'twoVar5' : Solid bezier second control point X
'twoVar6' : Solid bezier second control point Y
'twoVar7' : Solid bezier second anchor point X
'twoVar8' : Solid bezier second anchor point Y

#### Process

##### Sketch
<img src = "https://i.pinimg.com/736x/48/f2/dd/48f2ddc328439dcb1d841bd3b5206b21.jpg" alt = "Different typefaces for G" width = "500">

My sketch was inspired by the second typeface in this image, that used many curved lines that joined at a single point to create the different parts of the letter. To apply this to the code I tried to keep the anchor point of the letter parts the same, but I simplified the style slightly to use three lines.

This used a total of 13 parameters, as the two parts each needed 6 coordinates. For the sketch I had used a boolean expression for the "stem".

![Sketch of initial idea](/assets/sketch.jpg)

##### Different Font

When adding letters to the alphabet following my sketch idea, the characters began to look like scribbles and were quite messy.
<img src = "/assets/sketchy.png" alt = "Sketched font" width = "500">

I tried out a different font idea, using yin yang shapes to form the main part of the letter and extending the curved shape to form the secondary part. Although I liked the use of the yin yang shape, once adding the stems, I wasn't sure about the overall form. 
<img src = "/assets/yinyang.png" alt = "Yin yang font" width = "500">

I switched back to the code I had used for my sketch, and altered it slighty to change the letter forms. Rather than having both part comprised of lines, I filled the downstroke to make it a solid shape, and separated the starts and ends of the bezier curve shapes, creating a brush calligraphy aesthetic. Although this uses more parameters, I think it greatly improves the appearance of the letters and allows for more flexibility for certain characters.
<img src = "/assets/linedSolid.png" alt = "Solid and lined brush calligraphy font" width = "500">

I was not sure whether to continue developing the yin yang font or the brushstroke font. To help myself decide between the two, I changed the colour palette to a unappealing colour palette.
![Brush font in a different a orange and blue colour palette](/assets/blueOrangeBrush.png)
<!-- ![Yin yang font in a different a orange and blue colour palette](/assets/blueOrangeYinYang.png) -->
<img src = "/assets/blueOrangeYinYang.png" alt = "Yin yang font in a orange and blue colour palette" width = "500">
I chose to continue with the brush calligraphy font, as I thought that this font looks better regardless of the colour palette. This style also allows me to better refine each of the letters to create a readable and cohesive typeface.

##### Alphabet

##### Interpolation
