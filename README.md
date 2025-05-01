[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842563&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

### TITLE
Description

The characters in my alphabet are composed of bezier curves and shapes. The solid shape creates the dominant downstroke, and the lined shape forms the secondary part.

All together, the typeface is formed from 17 parameters. The beziers' anchor points and control points are all controlled by parameters, totalling 16 parameters for the letter shapes. For the purpoose of the interpolation, I have used a parameter for the alpha value to control the opacty. 

The 17 parameters per letter are:
* 'opacity': Alpha value
* 'linedVar1': Lined bezier first anchor point X
* 'linedVar2': Lined bezier first anchor point Y
* 'linedVar3': Lined bezier first control point X
* 'linedVar4': Lined bezier first control point Y
* 'linedVar5': Lined bezier second control point X
* 'linedVar6': Lined bezier second control point Y
* 'linedVar7': Lined bezier second anchor point X
* 'linedVar8': Lined bezier second anchor point Y
* 'solidVar1': Solid bezier first anchor point X
* 'solidVar2': Solid bezier first anchor point Y
* 'solidVar3': Solid bezier first control point X
* 'solidVar4': Solid bezier first control point Y
* 'solidVar5': Solid bezier second control point X
* 'solidVar6': Solid bezier second control point Y
* 'solidVar7': Solid bezier second anchor point X
* 'solidVar8': Solid bezier second anchor point Y

The letters interpolate through a twisting motion, making the old letter appear to be whisked away before forming the new letter.
It is worth noting that interaction.html does not highlight the complete interpolation of the lined bezier curves, as the  

### Process

#### [Sketch](sketch.html)
<img src = "https://i.pinimg.com/736x/48/f2/dd/48f2ddc328439dcb1d841bd3b5206b21.jpg" alt = "Different typefaces for G" width = "500">

My sketch was inspired by the second typeface in this image, that uses many curved lines that join at a single point to form the letter. 
For the code, I kept the anchor point of the letter parts the same and simplified the style to use three lines, using a total of 13 parameters.

<img src = "/assets/sketch.jpg" alt = "Sketch of initial idea" width = "500">

#### Different Font

When adding more letters to my sketch idea, they began to look like messy scribbles.

<img src = "/assets/sketchy.png" alt = "Sketched font" width = "500">

So, I tried a different idea, using yin yang shapes and extending the curve. Although I liked the use of the yin yang shape, I wasn't sure about the overall form when adding the stems. 

<img src = "/assets/yinyang.png" alt = "Yin yang font" width = "500">

I returned to the sketch's code and altered it to create a  font similar to modern calligraphy, with a solid bezier downstroke and separated bezier curve lines. Though using more parameters, it improved the aesthetic and allowed more flexibility for eeach letter.

<img src = "/assets/linedSolid.png" alt = "Solid and lined brush calligraphy font" width = "500">

Unssure which font to continue developing, I tried a clashing colour palette to help myself decide. 
I chose to continue with the brush calligraphy font, as I thought that this font looks better regardless of the colour palette. This style also allows me to better refine each of the letters to create a readable and cohesive typeface.

<img src = "/assets/blueOrangeBrush.png" alt = "Brushstroke font in a orange and blue colour palette" width = "500">
<img src = "/assets/blueOrangeYinYang.png" alt = "Yin yang font in a orange and blue colour palette" width = "500">

#### [Alphabet](alphabet.html)

Initial Alphabet:
<img src = "/assets/initialAlphabet.jpg" alt = "Initial alphabet iteration" width = "500">

Final Alphabet:

Because the code to draw the letterforms and the parameters is better suited to letters with two parts and either vertical or curved shapes, some letters and numbers such as m, z, 1, 2, 5, and 7, are less refined and readable than the rest of the alphabet.

#### [Interpolation](interaction.html)

After adding the linear interpolation, I explored using twisting, reflecting, and growing motions to reflect the tapering shape of the letters.

I first tried shortening the length of the solid bezier curve to reach a minimum halfway through the interpolation, before lengthening. I liked the animation of changing length and having the solid bezier return to a default state.

<img src = "/assets/solidMinimum.jpg" alt = "Solid bezier curve shortening then lengthening interpolation" width = "500">

I then used the maximum and minimum bounding box x coordinates to create the illusion of the letter twisting. This animation on the solid bezier curve was very quick and appeared as more of a rattle than a twist, which was not the effect I was going for.

<img src = "/assets/solidMinMax.jpg" alt = "Solid bezier curve moves to minimum and maximum x coordinates" width = "500">

Other interpolations I tried were adding a scale parameter to narrow the letters and also adding a shear parameter to warp the letters. These not only needed mre parameters, but I also found the movement either too boring or jarring so they didn't fit with the letterforms.

Narrowing: 
<img src = "/assets/horizontalShrink.jpg" alt = "Narrowing then widening letter interpolation" width = "500">

Warping:
<img src = "/assets/scaleShear.jpg" alt = "Whole letter shrinking and shearing along the X axis" width = "250">

I found that using the existing parameters for interpolation had better results. Using the minimum and maximum x coordinate interpolation on the bezier curve lines created a clearer twisting effect, because of the shorter, wider, horizontal, or rounded shape. I also adjusted the interpolation percent stages to slow down the twist and make it smoother. An additional parameter I added is opacity to control the alpha value, which creates the illusion of motion blur.

<img src = "/assets/twistInitial.jpg" alt = "Twisting lined bezier, and shortening solid bezier letters" width = "500">

#### Styling
After creating the letterform shapes and interpolation, I thought 

I wanted to create more depth within the letters themselves. so I added a gradient, referencing [odmundeetgen's gradient lines code](https://editor.p5js.org/odmundeetgen/sketches/qqmp0fVSK). I found that this gradient effect worked better for the lined beziers when there were five thinner curves rather than the three.

I explored some colour palette feedback with a teal, pink, and purple font, taking inspiration from hummingbird feathers.
<img src = "/assets/featherColour.jpg" alt = "Teal, pink, and purple feather font" width = "500">

<img src = "/assets/withBackground.jpg" alt = "Slower twisting blue letters on a cream background" width = "500">


