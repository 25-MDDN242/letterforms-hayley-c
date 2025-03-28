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
  "AnchorX": 40,
  "AnchorY": 0,
  "firstControlX": -100,
  "firstControlY": -30,
  "secondControlX": -50,
  "secondControlY": 200,

  "stem": true,
  "secondAnchorX": 40,
  "secondAnchorY": 0,
  "twoFirstControlX": 20,
  "twoFirstControlY": -20,
  "twoSecondControlX": 40,
  "twoSecondControlY": 200,
}

const letterB = {
  "AnchorX": 0,
  "AnchorY": 60,
  "firstControlX": 80,
  "firstControlY": -120,
  "secondControlX": 100,
  "secondControlY": 150,

  "stem": true,
  "secondAnchorX": 0,
  "secondAnchorY": 60,
  "twoFirstControlX": 40,
  "twoFirstControlY": -180,
  "twoSecondControlX": 10,
  "twoSecondControlY": -100,
}

const letterC = {
  "AnchorX": 30,
  "AnchorY": 0,
  "firstControlX": -60,
  "firstControlY": -120,
  "secondControlX": -100,
  "secondControlY": 200,
  
  "stem": false,
  "secondAnchorX": 0,
  "secondAnchorY": 0,
  "twoFirstControlX": 0,
  "twoFirstControlY": 0,
  "twoSecondControlX": 0,
  "twoSecondControlY": 0,
}

const backgroundColor  = "#ccd5e6";
const strokeColor = "#ffffff";
const spacing = 10;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);
  noFill();

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
  // let spacing = letterData["gap"];
  let firstBezierAnchorX = posx + letterData["AnchorX"];
  let firstBezierAnchorY = posy + letterData["AnchorY"];
  let firstBezierControlX = posx + letterData["firstControlX"];
  let firstBezierControlY = posy + letterData["firstControlY"];
  let secondBezierControlX = posx + letterData["secondControlX"];
  let secondBezierControlY = posy + letterData["secondControlY"];
 
  let twoFirstBezierAnchorX = posx + letterData["secondAnchorX"];
  let twoFirstBezierAnchorY = posy + letterData["secondAnchorY"];
  let twoFirstBezierControlX = posx + letterData["twoFirstControlX"];
  let twoFirstBezierControlY = posy + letterData["twoFirstControlY"];
  let twoSecondBezierControlX = posx + letterData["twoSecondControlX"];
  let twoSecondBezierControlY = posy + letterData["twoSecondControlY"];
  let drawStem = letterData["stem"]

  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX, firstBezierControlY, secondBezierControlX, secondBezierControlY, firstBezierAnchorX, firstBezierAnchorY);
  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + spacing, firstBezierControlY + spacing, secondBezierControlX + spacing, secondBezierControlY - 2 * spacing, firstBezierAnchorX, firstBezierAnchorY);
  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + 2 * spacing, firstBezierControlY + 2 * spacing, secondBezierControlX + 2 * spacing, secondBezierControlY - 4 * spacing, firstBezierAnchorX, firstBezierAnchorY);
  if (drawStem == true){
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX, twoFirstBezierControlY, twoSecondBezierControlX, twoSecondBezierControlY, twoFirstBezierAnchorX, twoFirstBezierAnchorY);
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + spacing, twoFirstBezierControlY + spacing, twoSecondBezierControlX + spacing, twoSecondBezierControlY - 2 * spacing, twoFirstBezierAnchorX, twoFirstBezierAnchorY);
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + 2 * spacing, twoFirstBezierControlY + 2 * spacing, twoSecondBezierControlX + 2 * spacing, twoSecondBezierControlY - 4 * spacing, twoFirstBezierAnchorX, twoFirstBezierAnchorY);  
  }
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
