/* these are optional special variables which will change the system */
var systemBackgroundColor = "#D8EBF0";
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

  stroke(247, 187, 119);
  strokeWeight(3);
  noFill();
  bezier(bezierOneX1, bezierOneY1, bezierOneX2, bezierOneY2, bezierOneX3, bezierOneY3, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + spacing, bezierOneY2 + spacing, bezierOneX3 + spacing, bezierOneY3 - spacing, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + 2 * spacing, bezierOneY2 + 2 * spacing, bezierOneX3 + 2 * spacing, bezierOneY3 - 2 * spacing, bezierOneX4, bezierOneY4);

  // noStroke();
  // fill(247, 187, 119);
  // beginShape();
  // vertex(bezierTwoX1, bezierTwoY1);
  // bezierVertex(bezierTwoX2, bezierTwoY2 + 2 * spacing, bezierTwoX3 + 2 * spacing, bezierTwoY3, bezierTwoX4 + 2 * spacing, bezierTwoY4);
  // bezierVertex(bezierTwoX3 - 2 * spacing, bezierTwoY3, bezierTwoX2 - 2 * spacing, bezierTwoY2  + 2 * spacing, bezierTwoX1, bezierTwoY1);
  // endShape();
  // noFill();
  // stroke(0, 255, 255);
  // stroke(5);
  // bezier(bezierTwoX1, bezierTwoY1, bezierTwoX2, bezierTwoY2, bezierTwoX3, bezierTwoY3, bezierTwoX4, bezierTwoY4);

  noStroke();
  fill(247, 187, 119);
  beginShape();
  vertex(bezierTwoX1, bezierTwoY1);
  bezierVertex(bezierTwoX2 + 1.5 * spacing, bezierTwoY2, bezierTwoX3 + 1.5 * spacing, bezierTwoY3, bezierTwoX4, bezierTwoY4);
  bezierVertex(bezierTwoX3 - 1.5 * spacing, bezierTwoY3, bezierTwoX2 - 1.5 * spacing, bezierTwoY2, bezierTwoX1, bezierTwoY1);
  endShape();

  // noFill();
  // stroke(0);
  // strokeWeight(2);
  // bezier(bezierTwoX1, bezierTwoY1, bezierTwoX2, bezierTwoY2, bezierTwoX3, bezierTwoY3, bezierTwoX4, bezierTwoY4);

  strokeWeight(5);
  stroke(255, 0, 255);
  point(bezierOneX2, bezierOneY2);
  point(bezierOneX3, bezierOneY3);
  stroke(0, 255, 255);
  point(bezierTwoX2, bezierTwoY2);
  point(bezierTwoX3, bezierTwoY3);
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
