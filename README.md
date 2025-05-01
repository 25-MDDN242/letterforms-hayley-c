[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842563&assignment_repo_type=AssignmentRepo)
## MDDN242 Project 2: Parametric Design <br> Swirling <br> By Hayley Chung

Swirling is a set of letterforms created using parameterized bezier curves and shapes, to create an airy and whimsical typeface that is reminiscent of a swirling breeze. The letters are swept away by the wind in a twisting motion to be replaced by a new letter.

#### Technical notes
Swirling is formed from 17 parameters. The eight anchor points and eight control points to determine the letterforms bezier shapes, as well as the alpha value to control the letters' opacity.

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

Note: interaction.html does not highlight the complete interpolation of the lined bezier curves, as the letters reach the target coordinates at 33% and 66%. Therefore, the interpolation is is not shown to its full extent.

## Process

### [Sketch](sketch.html)
<img src = "https://i.pinimg.com/736x/48/f2/dd/48f2ddc328439dcb1d841bd3b5206b21.jpg" alt = "Different typefaces for G" width = "300">

My sketch was inspired by the second typeface in this image, that uses many curved lines that join at a single point to form the letter. 
For the code, I kept the anchor point of the letter parts the same and simplified the style to use three lines, using a total of 13 parameters.

<img src = "/assets/sketch.jpg" alt = "Sketch of initial idea" width = "300">

### Different Font

When adding more letters to my sketch idea, they began to look like messy scribbles not a refined typeface.

<img src = "/assets/sketchy.png" alt = "Sketched font" width = "300">

I tried a different idea using yin yang shapes and extending the curve. Although I liked the use of the yin yang shape, I wasn't sure about the overall form when adding the stems. 

<img src = "/assets/yinyang.png" alt = "Yin yang font" width = "300">

I returned to the sketch's code and altered it to create a  font similar to modern calligraphy, with a solid bezier downstroke and separated bezier curve lines. Though using more parameters, it improved the aesthetic and allowed more flexibility for eeach letter.

<img src = "/assets/linedSolid.png" alt = "Solid and lined brush calligraphy font" width = "300">

Unsure which font to continue developing, I tried a clashing colour palette to help myself decide. 
I chose to continue with the brush calligraphy font, as I thought that this font looks better regardless of the colour palette. This style also allows me to better refine each of the letters to create a readable and cohesive typeface.

<img src = "/assets/blueOrangeBrush.png" alt = "Brushstroke font in a orange and blue colour palette" width = "300">
<img src = "/assets/blueOrangeYinYang.png" alt = "Yin yang font in a orange and blue colour palette" width = "300">

### [Alphabet](alphabet.html)

Initial Alphabet:

The inital alphabet iteration was already pretty readable, however there were small inconsistencies in the widths, x-heights, and baselines between letters and the bezier curves and bezier shapes were not always properly lined up.

<img src = "/assets/initialAlphabet.jpg" alt = "Initial alphabet" width = "300">

Final Alphabet:

The final alphabet utilises the forms of the two beziers to create a cleaner, consistent, and readable typeface.

<img src = "/assets/finalAlphabet.jpg" alt = "Final alphabet" width = "300">

Because the code to draw the letterforms and the parameters is better suited to letters with two parts and either vertical or curved shapes, some letters and numbers such as m, z, 1, 2, 5, and 7, are less refined and readable than the rest of the alphabet.

### [Interpolation](interaction.html)

After adding the linear interpolation, I explored using twisting, reflecting, and growing motions to reflect the tapering shape of the letters.

I first tried shortening the length of the solid bezier curve to reach a minimum halfway through the interpolation, before lengthening. I liked the animation of changing length and having the solid bezier return to a default state.

<img src = "/assets/solidMinimum.jpg" alt = "Solid bezier curve shortening then lengthening interpolation" width = "300">

I then used the maximum and minimum bounding box x coordinates to create the illusion of the letter twisting. This animation on the solid bezier curve was very quick and appeared as more of a rattle than a twist, which was not the effect I was going for.

<img src = "/assets/solidMinMax.jpg" alt = "Solid bezier curve moves to minimum and maximum x coordinates" width = "300">

Other interpolations I tried were adding a scale parameter to narrow the letters and also adding a shear parameter to warp the letters. These not only needed mre parameters, but I also found the movement either too boring or jarring so they didn't fit with the letterforms.

Narrowing: 

<img src = "/assets/horizontalShrink.jpg" alt = "Narrowing then widening letter interpolation" width = "300">

Warping:

<img src = "/assets/scaleShear.jpg" alt = "Whole letter shrinking and shearing along the X axis" width = "300">

I found that using the existing parameters for interpolation had better results. Using the minimum and maximum x coordinate interpolation on the bezier curve lines created a clearer twisting effect, because of the shorter, wider, horizontal, or rounded shape. I also adjusted the interpolation percent stages to slow down the twist and make it smoother. An additional parameter I added is opacity to control the alpha value, which creates the illusion of motion blur.

<img src = "/assets/twistInitial.jpg" alt = "Twisting lined bezier, and shortening solid bezier letters" width = "300">

### Styling
After creating the letterform shapes and interpolation, I wanted to work on the aesthetics of the letterforms, colour palette, and background to make exhibition more visually pleasing.

To create more depth within the letters themselves I added a gradient, referencing [odmundeetgen's gradient lines code](https://editor.p5js.org/odmundeetgen/sketches/qqmp0fVSK).

'''
  var grad = this.drawingContext.createLinearGradient(linedX1, linedY1, linedX4, linedY4);
  grad.addColorStop(0, white);
  grad.addColorStop(.4, white25);
  grad.addColorStop(.5, white15);
  grad.addColorStop(.6, white25);
  grad.addColorStop(1, white);
  this.drawingContext.strokeStyle = grad;
'''

 I found that this gradient effect worked better for the lined beziers when there were five thinner curves rather than the three.

From feedback I received, I explored some different colour palettes.

* A grey blue background: Quite dull
<img src = "/assets/greyBlue.jpg" alt = "Grey blue background with twisting font" width = "300">

* A bright blue background: Felt a bit unnatural
<img src = "/assets/brightBlue.png" alt = "Bright blue background with twisting font" width = "300">

* A mint green background with teal, pink, and purple font: Gradient didn't always show properly
<img src = "/assets/featherColour.jpg" alt = "Teal, pink, and purple feather font" width = "300">

* Medium blue background with background decoration: Felt quite corporate
<img src = "/assets/mediumBlue.jpg" alt = "Medium blue background with twisting font" width = "300">

The final colour palette I chose is a white font on a periwinkle background, as the muted tone matched the airy and calming shape of the letters, while the purple tint added a sense of whimsy and playfulness.

<img src = "/assets/swirling.jpg" alt = "Periwinkle background with twisting font" width = "300">



