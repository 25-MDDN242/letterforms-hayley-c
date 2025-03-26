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
  "firstAnchorX": 40,
  "firstAnchorY": 0,
  "firstControlX": -100,
  "firstControlY": -20,
  "secondControlX": -60,
  "secondControlY": 200,
  "secondAnchorX": 40,
  "secondAnchorY": 0,

  "stem": true,
  "twoFirstAnchorX": 40,
  "twoFirstAnchorY": 0,
  "twoFirstControlX": 20,
  "twoFirstControlY": -20,
  "twoSecondControlX": 40,
  "twoSecondControlY": 200,
  "twoSecondAnchorX": 40,
  "twoSecondAnchorY": 0,
}

const letterB = {
  "firstAnchorX": 0,
  "firstAnchorY": 60,
  "firstControlX": 80,
  "firstControlY": -120,
  "secondControlX": 100,
  "secondControlY": 150,
  "secondAnchorX": 0,
  "secondAnchorY": 60,

  "stem": true,
  "twoFirstAnchorX": 0,
  "twoFirstAnchorY": 60,
  "twoFirstControlX": 40,
  "twoFirstControlY": -180,
  "twoSecondControlX": 10,
  "twoSecondControlY": -100,
  "twoSecondAnchorX": 0,
  "twoSecondAnchorY": 60,
}

const letterC = {
  "firstAnchorX": 30,
  "firstAnchorY": 0,
  "firstControlX": -80,
  "firstControlY": -20,
  "secondControlX": -80,
  "secondControlY": 100,
  "secondAnchorX": 30,
  "secondAnchorY": 80,
  
  "stem": false,
  "twoFirstAnchorX": 0,
  "twoFirstAnchorY": 0,
  "twoFirstControlX": 0,
  "twoFirstControlY": 0,
  "twoSecondControlX": 0,
  "twoSecondControlY": 0,
  "twoSecondAnchorX": 0,
  "twoSecondAnchorY": 0,
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
  strokeWeight(1);
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
  let firstBezierAnchorX = posx + letterData["firstAnchorX"];
  let firstBezierAnchorY = posy + letterData["firstAnchorY"];
  let firstBezierControlX = posx + letterData["firstControlX"];
  let firstBezierControlY = posy + letterData["firstControlY"];
  let secondBezierControlX = posx + letterData["secondControlX"];
  let secondBezierControlY = posy + letterData["secondControlY"];
  let secondBezierAnchorX = posx + letterData["secondAnchorX"];
  let secondBezierAnchorY = posy + letterData["secondAnchorY"];
 
  let twoFirstBezierAnchorX = posx + letterData["twoFirstAnchorX"];
  let twoFirstBezierAnchorY = posy + letterData["twoFirstAnchorY"];
  let twoFirstBezierControlX = posx + letterData["twoFirstControlX"];
  let twoFirstBezierControlY = posy + letterData["twoFirstControlY"];
  let twoSecondBezierControlX = posx + letterData["twoSecondControlX"];
  let twoSecondBezierControlY = posy + letterData["twoSecondControlY"];
  let twoSecondBezierAnchorX = posx + letterData["twoSecondAnchorX"];
  let twoSecondBezierAnchorY = posy + letterData["twoSecondAnchorY"];
  let drawStem = letterData["stem"]

  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX, firstBezierControlY, secondBezierControlX, secondBezierControlY, secondBezierAnchorX, secondBezierAnchorY);
  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + spacing, firstBezierControlY + spacing, secondBezierControlX + spacing, secondBezierControlY - 2 * spacing, secondBezierAnchorX, secondBezierAnchorY);
  bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + 2 * spacing, firstBezierControlY + 2 * spacing, secondBezierControlX + 2 * spacing, secondBezierControlY - 4 * spacing, secondBezierAnchorX, secondBezierAnchorY);
  if (drawStem == true){
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX, twoFirstBezierControlY, twoSecondBezierControlX, twoSecondBezierControlY, twoSecondBezierAnchorX, twoSecondBezierAnchorY);
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + spacing, twoFirstBezierControlY + spacing, twoSecondBezierControlX + spacing, twoSecondBezierControlY - 2 * spacing, twoSecondBezierAnchorX, twoSecondBezierAnchorY);
    bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + 2 * spacing, twoFirstBezierControlY + 2 * spacing, twoSecondBezierControlX + 2 * spacing, twoSecondBezierControlY - 4 * spacing, twoSecondBezierAnchorX, twoSecondBezierAnchorY);  
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
