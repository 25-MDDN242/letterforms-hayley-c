/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#D3D3D3";
var systemBoxColor = "#C73869";

/* internal constants */

// const darkGreen  = "#26b29d";
// const lightGreen  = "#30dfc4";
// const strokeColor  = "#0a2d27";

const spacing = 10;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // // color/stroke setup
  // stroke(255);
  // strokeWeight(2);
  // noFill();

  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // // draw two circles
  // fill(darkGreen);
  // ellipse(50, 150, 75, 75);
  // fill(lightGreen);
  // ellipse(pos2x, pos2y, size2, size2);

  // let firstBezierAnchorX = 0 + letterData["AnchorX"];
  // let firstBezierAnchorY = 150 + letterData["AnchorY"];
  // let firstBezierControlX = 0 + letterData["firstControlX"];
  // let firstBezierControlY = 150 + letterData["firstControlY"];
  // let secondBezierControlX = 0 + letterData["secondControlX"];
  // let secondBezierControlY = 150 + letterData["secondControlY"];
 
  // let twoFirstBezierAnchorX = 0 + letterData["secondAnchorX"];
  // let twoFirstBezierAnchorY = 150 + letterData["secondAnchorY"];
  // let twoFirstBezierControlX = 0 + letterData["twoFirstControlX"];
  // let twoFirstBezierControlY = 150 + letterData["twoFirstControlY"];
  // let twoSecondBezierControlX = 0 + letterData["twoSecondControlX"];
  // let twoSecondBezierControlY = 150 + letterData["twoSecondControlY"];
  // let drawStem = letterData["stem"]

  // bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX, firstBezierControlY, secondBezierControlX, secondBezierControlY, firstBezierAnchorX, firstBezierAnchorY);
  // bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + spacing, firstBezierControlY + spacing, secondBezierControlX + spacing, secondBezierControlY - 2 * spacing, firstBezierAnchorX, firstBezierAnchorY);
  // bezier(firstBezierAnchorX, firstBezierAnchorY, firstBezierControlX + 2 * spacing, firstBezierControlY + 2 * spacing, secondBezierControlX + 2 * spacing, secondBezierControlY - 4 * spacing, firstBezierAnchorX, firstBezierAnchorY);
  // if (drawStem == true){
  //   bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX, twoFirstBezierControlY, twoSecondBezierControlX, twoSecondBezierControlY, twoFirstBezierAnchorX, twoFirstBezierAnchorY);
  //   bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + spacing, twoFirstBezierControlY + spacing, twoSecondBezierControlX + spacing, twoSecondBezierControlY - 2 * spacing, twoFirstBezierAnchorX, twoFirstBezierAnchorY);
  //   bezier(twoFirstBezierAnchorX, twoFirstBezierAnchorY, twoFirstBezierControlX + 2 * spacing, twoFirstBezierControlY + 2 * spacing, twoSecondBezierControlX + 2 * spacing, twoSecondBezierControlY - 4 * spacing, twoFirstBezierAnchorX, twoFirstBezierAnchorY);  
  // }
  angleMode(DEGREES);
  let teardropSizeX = letterData["teardropScaleX"];
  let teardropSizeY = letterData["teardropScaleY"];
  let teardropTranslateX = letterData["teardropX"];
  let teardropTranslateY = letterData["teardropY"];
  let teardropSpin = letterData["teardropRotate"];

  
  push();
  translate(teardropTranslateX, teardropTranslateY);
  scale(teardropSizeX, teardropSizeY);
  rotate(teardropSpin);
  noStroke();
  fill(255);
  let c = 40*0.551915024494;
  beginShape();
  vertex(0, 40);
  bezierVertex(-c, 40, -40, c, -40, 0);
  bezierVertex(-40, -c, -c, -40, 0, -40);
  bezierVertex(30, -40, 30, 0, 0, 0);
  bezierVertex(-30, 0, -30, 40, 0, 40);
  endShape();
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  vertex(0, 40);
  bezierVertex(c, 40, 40, c, 40, 0);
  bezierVertex(40, -c, c, -40, 0, -40);
  endShape();
  pop();
  // scale(-1, -1);
  // fill(0);
  // beginShape();
  // vertex(0, 100);
  // bezierVertex(-c, 100, -100, c, -100, 0);
  // bezierVertex(-100, -c, -c, -100, 0, -100);
  // bezierVertex(75, -100, 75, 0, 0, 0);
  // bezierVertex(-75, 0, -75, 100, 0, 100);
  // endShape();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
