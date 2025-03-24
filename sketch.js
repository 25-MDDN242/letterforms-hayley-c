const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 40,
  "offsetx": 55,
  "offsety": 40,
  "circle": 50,
}

const letterB = {
  "size": 75,
  "offsetx": -10,
  "offsety": 20,
  "circle": 40,
}

const letterC = {
  "size": 60,
  "offsetx": 50,
  "offsety": -20,
  "circle": 30,
}

const backgroundColor  = "#ccd5e6";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let circleSize = letterData["circle"];

  // draw two circles
  // noStroke()
  // fill(darkGreen);
  // ellipse(posx, posy, 150, 150);
  // fill(lightGreen);
  noFill();
  stroke(255);
  strokeWeight(5);
  line(posx, posy, pos2x, pos2y);
  ellipseMode(CORNER);
  ellipse(pos2x, pos2y, circleSize, circleSize);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
