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
  stroke(255);
  strokeWeight(2);
  noFill();

  let bezierOneX1 = 0 + letterData["oneVar1"];
  let bezierOneY1 = 150 + letterData["oneVar2"];
  let bezierOneX2 = 0 + letterData["oneVar3"];
  let bezierOneY2 = 150 + letterData["oneVar4"];
  let bezierOneX3 = 0 + letterData["oneVar5"];
  let bezierOneY3 = 150 + letterData["oneVar6"];
  let bezierOneX4 = 0 + letterData["oneVar7"];
  let bezierOneY4 = 150 + letterData["oneVar8"];
 
  let bezierTwoX1 = 0 + letterData["twoVar1"];
  let bezierTwoY1 = 150 + letterData["twoVar2"];
  let bezierTwoX2 = 0 + letterData["twoVar3"];
  let bezierTwoY2 = 150 + letterData["twoVar4"];
  let bezierTwoX3 = 0 + letterData["twoVar5"];
  let bezierTwoY3 = 150 + letterData["twoVar6"];
  let bezierTwoX4 = 0 + letterData["twoVar7"];
  let bezierTwoY4 = 150 + letterData["twoVar8"]

  bezier(bezierOneX1, bezierOneY1, bezierOneX2, bezierOneY2, bezierOneX3, bezierOneY3, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + spacing, bezierOneY2 + spacing, bezierOneX3 + spacing, bezierOneY3 - spacing, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + 2 * spacing, bezierOneY2 + 2 * spacing, bezierOneX3 + 2 * spacing, bezierOneY3 - 2 * spacing, bezierOneX4, bezierOneY4);

  noStroke();
  fill(255);
  beginShape();
  vertex(bezierTwoX1, bezierTwoY1);
  bezierVertex(bezierTwoX2, bezierTwoY2 + 2 * spacing, bezierTwoX3 + 2 * spacing, bezierTwoY3, bezierTwoX4 + 2 * spacing, bezierTwoY4);
  bezierVertex(bezierTwoX3 - 2 * spacing, bezierTwoY3, bezierTwoX2 - 2 * spacing, bezierTwoY2  + 2 * spacing, bezierTwoX1, bezierTwoY1);
  endShape();

  strokeWeight(5);
  stroke(255, 0, 255);
  point(bezierTwoX2, bezierTwoY2);
  stroke(0, 255, 255);
  point(bezierTwoX3, bezierTwoY3);

  // angleMode(DEGREES);
  // let teardropSizeX = letterData["teardropScaleX"];
  // let teardropSizeY = letterData["teardropScaleY"];
  // let teardropTranslateX = letterData["teardropX"];
  // let teardropTranslateY = letterData["teardropY"];
  // let teardropSpin = letterData["teardropRotate"];
  // let one2X = letterData["bezierOne2X"];
  // let one2Y = letterData["bezierOne2Y"];
  // let one3X = letterData["bezierOne3X"];
  // let one3Y = letterData["bezierOne3Y"];
  // let one4X = letterData["bezierOne4X"];
  // let one4Y = letterData["bezierOne4Y"];
  // let two2X = letterData["bezierTwo2X"];
  // let two2Y = letterData["bezierTwo2Y"];
  // let two3X = letterData["bezierTwo3X"];
  // let two3Y = letterData["bezierTwo3Y"];
  // let two4X = letterData["bezierTwo4X"];
  // let two4Y = letterData["bezierTwo4Y"];

  
  // push();
  // translate(teardropTranslateX, teardropTranslateY);
  // scale(teardropSizeX, teardropSizeY);
  // rotate(teardropSpin);
  // noStroke();
  // fill(255);
  // let c = 40*0.551915024494;
  // beginShape();
  // vertex(0, 40);
  // bezierVertex(-c, 40, -40, c, -40, 0);
  // bezierVertex(-40, -c, -c, -40, 0, -40);
  // bezierVertex(30, -40, 30, 0, 0, 0);
  // bezierVertex(-30, 0, -30, 40, 0, 40);
  // endShape();
  // stroke(255);
  // strokeWeight(5);
  // noFill();
  // // line(-8, 38, 50, 100)
  // // beginShape();
  // vertex(0, 40);
  // bezierVertex(one2X, one2Y, one3X, one3Y, one4X, one4Y);
  // bezierVertex(two2X, two2Y, two3X, two3Y, two4X, two4Y);
  // // bezierVertex(c, 40, 40, c, 40, 0);
  // // bezierVertex(40, -c, c, -40, 0, -40);
  // endShape();
  // strokeWeight(5);
  // stroke(255, 0, 255);
  // point(one2X, one2Y);
  // point(one3X, one3Y);
  // stroke(0, 255, 255);
  // point(two2X, two2Y);
  // point(two3X, two3Y);
  // pop();

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
