[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842563&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

### TITLE
Description

The characters in my alpphabet are composed of bezier curve shapes. The solid shape creates the dominant downstroke, and the lined shape forms the secondary part.

The coordinates of the two anchor points and two control points are all controlled by parameters, totalling eight parameters for each of the bezier shapes. Therefore I have used 16 parameters, which is slightly more than the recommended.

The 16 parameters per letter are:

* 'oneVar1' : Lined bezier first anchor point X
* 'oneVar2' : Lined bezier first anchor point Y
* 'oneVar3' : Lined bezier first control point X
* 'oneVar4' : Lined bezier first control point Y
* 'oneVar5' : Lined bezier second control point X
* 'oneVar6' : Lined bezier second control point Y
* 'oneVar7' : Lined bezier second anchor point X
* 'oneVar8' : Lined bezier second anchor point Y

* 'twoVar1' : Solid bezier first anchor point X
* 'twoVar2' : Solid bezier first anchor point Y
* 'twoVar3' : Solid bezier first control point X
* 'twoVar4' : Solid bezier first control point Y
* 'twoVar5' : Solid bezier second control point X
* 'twoVar6' : Solid bezier second control point Y
* 'twoVar7' : Solid bezier second anchor point X
* 'twoVar8' : Solid bezier second anchor point Y

#### Process

##### Sketch
<img src = "https://i.pinimg.com/736x/48/f2/dd/48f2ddc328439dcb1d841bd3b5206b21.jpg" alt = "Different typefaces for G" width = "500">

My sketch was inspired by the second typeface in this image, that used many curved lines that joined at a single point to create the different parts of the letter. To apply this to the code I tried to keep the anchor point of the letter parts the same, but I simplified the style slightly to use three lines.

This used a total of 13 parameters, as the two parts each needed 6 coordinates. For the sketch I had used a boolean expression for the "stem".

<img src = "/assets/sketch.jpg" alt = "Sketch of initial idea" width = "500">

##### Different Font

When adding letters to the alphabet following my sketch idea, the characters began to look like scribbles and were quite messy.
<img src = "/assets/sketchy.png" alt = "Sketched font" width = "500">

I tried out a different font idea, using yin yang shapes to form the main part of the letter and extending the curved shape to form the secondary part. Although I liked the use of the yin yang shape, once adding the stems, I wasn't sure about the overall form. 

<img src = "/assets/yinyang.png" alt = "Yin yang font" width = "500">

I switched back to the code I had used for my sketch, and altered it slighty to change the letter forms. Rather than having both part comprised of lines, I filled the downstroke to make it a solid shape, and separated the starts and ends of the bezier curve shapes, creating a brush calligraphy aesthetic. Although this uses more parameters, I think it greatly improves the appearance of the letters and allows for more flexibility for certain characters.

<img src = "/assets/linedSolid.png" alt = "Solid and lined brush calligraphy font" width = "500">

I was not sure whether to continue developing the yin yang font or the brushstroke font. To help myself decide between the two, I changed the colour palette to a unappealing colour palette.

<img src = "/assets/blueBrush.png" alt = "Brushstroke font in a orange and blue colour palette" width = "500">

<img src = "/assets/blueOrangeYinYang.png" alt = "Yin yang font in a orange and blue colour palette" width = "500">

I chose to continue with the brush calligraphy font, as I thought that this font looks better regardless of the colour palette. This style also allows me to better refine each of the letters to create a readable and cohesive typeface.

##### Alphabet

Because the code to draw the letterforms and the parameters is better suited to letters with two parts and either vertical or curved shapes, some letters and numbers such as m, z, 1, 2, 5, and 7, are less refined and readable than the rest of the alphabet.

##### Interpolation

After adding the linear interpolation, I didn't have a clear idea of how the interpolation would look. To keep a similar feeling to the design of the letterforms, I wanted to explore using twisting, reflecting, and growing motions as ways to change between the letters.

To get used to the interpolation system, I first tried shortening the length of the solid bezier curve to reach a minimum at the halfway point of the interpolation, from which it would then lengthen to the new letter. I liked the way this interpolation animation looked, having the solid bezier return to a default state while changing letters.

<img src = "/assets/solidMinimum.jpg" alt = "Solid bezier curve shortening then lengthening interpolation" width = "500">

I then had the idea to try use the maximum and minimum x coordinates to create the illusion of the letter twisting. The two anchor points move between the x coordinates of 0 and 100, doing one and a half rotations before forming the new letter. This animation on the solid bezier curve was very quick and appeared as more of a rattle than a twist, which was not the effect I was going for.

<img src = "/assets/solidMinMax.jpg" alt = "Solid bezier curve moves to minimum and maximum x coordinates" width = "500">

I tried adding a parameter to change the scale of the letters. Rather than shrinking the whole letter, I narrowed the letter for the first half of the animation before it widens again for the new letter. However, I thought the animation was quite boring.

<img src = "/assets/horizontalShrink.jpg" alt = "Narrowing then widening letter interpolation" width = "500">

I still wanted to create a twisting and spinning animation to interpolate the letters, trying to add a shear parameter to do so. I first animated the whole letter and then just the lined bezier curve. I found the motion quite jarring and choppy which I though clashed with the design of the letters themselves. Also, with the number of paramters I was alreadying using, I didn't think these extra ones were necessary for interpolation.

<img src = "/assets/scaleShear.jpg" alt = "Whole letter shrinking and shearing along the X axis" width = "500">

<img src = "/assets/lineShear.jpg" alt = "Lined bezier curve skewed along the X axis" width = "500">

From exploring interpolation with these added parameters, I though these extra ones weren't necessary for interpolation, especially with the number of paramters I was alreadying using.

I found that using the existing bezier curve parameters for interpolation had better results than adding additional parameters. I went back to shortening the length as a default intermediate stage for the solid bezier curve, and then started to iterate the minimum and maximum x coordinate interpolation. I found the twisting effect was clearer on the lined bezier curve than the solid bezier curve, as the line bezier curve makes up the shorter, wider, horizontal, or rounded parts of the letters so the animation was more dramatic. With the anchor points already animating, I then animated the two control points to move between 25 and 75 before forming the new letter. I tried adding a parameter two interpolate the letters' opacity, though this effect may work better with a different colour palette.

<img src = "/assets/twistInitial.jpg" alt = "Twisting lined bezier, and shortening solid bezier letters" width = "500">

I still found the animation a bit too quick, so rather than using 25% intervals for the different stages of the interpolation, I changed it to use 33% intervals. Rather than the one and a half rotations, the letters only rotate once, so the animation is slower and more refined which better fits the letters' appearance. I also started experimenting with colour palettes, first trying blue letters on a cream background, which I think helped with the interpolating opacity.

<img src = "/assets/creamBlue.jpg" alt = "Slower twisting blue letters on a cream background" width = "500">


