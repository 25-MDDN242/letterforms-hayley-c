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
  // lined bezier parameters
  let bezierOneX1 = 0 + letterData["oneVar1"]; // first anchor x 
  let bezierOneY1 = 150 + letterData["oneVar2"]; // first anchor y
  let bezierOneX2 = 0 + letterData["oneVar3"]; // first control point x
  let bezierOneY2 = 150 + letterData["oneVar4"]; // first control point y
  let bezierOneX3 = 0 + letterData["oneVar5"]; // second control point x
  let bezierOneY3 = 150 + letterData["oneVar6"]; // second control point y
  let bezierOneX4 = 0 + letterData["oneVar7"]; // second anchor point x
  let bezierOneY4 = 150 + letterData["oneVar8"]; // second anchor point y
  // solid bezier parameters
  let bezierTwoX1 = 0 + letterData["twoVar1"]; // first anchor point x 
  let bezierTwoY1 = 150 + letterData["twoVar2"]; // first anchor point y
  let bezierTwoX2 = 0 + letterData["twoVar3"]; // first control point x
  let bezierTwoY2 = 150 + letterData["twoVar4"]; // first control point y
  let bezierTwoX3 = 0 + letterData["twoVar5"]; // second control point x
  let bezierTwoY3 = 150 + letterData["twoVar6"]; // second control point y
  let bezierTwoX4 = 0 + letterData["twoVar7"]; // second anchor point x
  let bezierTwoY4 = 150 + letterData["twoVar8"]; // second anchor point y

  // lined bezier curve
  stroke(217, 217, 217);
  strokeWeight(3);
  noFill();
  bezier(bezierOneX1, bezierOneY1, bezierOneX2, bezierOneY2, bezierOneX3, bezierOneY3, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + spacing, bezierOneY2 + spacing, bezierOneX3 + spacing, bezierOneY3 - spacing, bezierOneX4, bezierOneY4);
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + 2 * spacing, bezierOneY2 + 2 * spacing, bezierOneX3 + 2 * spacing, bezierOneY3 - 2 * spacing, bezierOneX4, bezierOneY4);

  // solid bezier curve
  noStroke();
  fill(217, 217, 217);
  beginShape();
  vertex(bezierTwoX1, bezierTwoY1);
  bezierVertex(bezierTwoX2 + 1.5 * spacing, bezierTwoY2, bezierTwoX3 + 1.5 * spacing, bezierTwoY3, bezierTwoX4, bezierTwoY4);
  bezierVertex(bezierTwoX3 - 1.5 * spacing, bezierTwoY3, bezierTwoX2 - 1.5 * spacing, bezierTwoY2, bezierTwoX1, bezierTwoY1);
  endShape();

  // TO DO
  strokeWeight(5);
  stroke(255, 0, 255);
  point(bezierOneX2, bezierOneY2);
  point(bezierOneX3, bezierOneY3);
  stroke(0, 255, 255);
  point(bezierTwoX2, bezierTwoY2);
  point(bezierTwoX3, bezierTwoY3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let zero = 0;
  let flipX = -1;
  let new_letter = {};

  // if(percent < 60){
  //   new_letter["twoVar3"] = oldObj["twoVar3"];
  //   new_letter["twoVar5"] = oldObj["twoVar5"];
  // }
  // else{
  //   new_letter["twoVar3"] = map(percent, 60, 100, oldObj["twoVar3"], newObj["twoVar3"]);
  //   new_letter["twoVar5"] = map(percent, 60, 100, oldObj["twoVar5"], newObj["twoVar5"]);
  // }

  if(percent < 50){
    new_letter["twoVar1"] = map(percent, 0, 50, oldObj["twoVar1"], zero);
    new_letter["twoVar2"] = map(percent, 0, 50, oldObj["twoVar2"], zero);
    new_letter["twoVar3"] = map(percent, 0, 50, oldObj["twoVar3"], zero);
    new_letter["twoVar4"] = map(percent, 0, 50, oldObj["twoVar4"], zero);
    new_letter["twoVar5"] = map(percent, 0, 50, oldObj["twoVar5"], zero);
    new_letter["twoVar6"] = map(percent, 0, 50, oldObj["twoVar6"], zero);
    new_letter["twoVar7"] = map(percent, 0, 50, oldObj["twoVar7"], zero);
    new_letter["twoVar8"] = map(percent, 0, 50, oldObj["twoVar8"], zero);
  }
  else{
    new_letter["twoVar1"] = map(percent, 50, 100, zero, newObj["twoVar1"]);
    new_letter["twoVar2"] = map(percent, 50, 100, zero, newObj["twoVar2"]);
    new_letter["twoVar3"] = map(percent, 50, 100, zero, newObj["twoVar3"]);
    new_letter["twoVar4"] = map(percent, 50, 100, zero, newObj["twoVar4"]);
    new_letter["twoVar5"] = map(percent, 50, 100, zero, newObj["twoVar5"]);
    new_letter["twoVar6"] = map(percent, 50, 100, zero, newObj["twoVar6"]);
    new_letter["twoVar7"] = map(percent, 50, 100, zero, newObj["twoVar7"]);
    new_letter["twoVar8"] = map(percent, 50, 100, zero, newObj["twoVar8"]);
  }

  new_letter["oneVar1"] = map(percent, 0, 100, oldObj["oneVar1"], newObj["oneVar1"]);
  new_letter["oneVar2"] = map(percent, 0, 100, oldObj["oneVar2"], newObj["oneVar2"]);
  new_letter["oneVar3"] = map(percent, 0, 100, oldObj["oneVar3"], newObj["oneVar3"]);
  new_letter["oneVar4"] = map(percent, 0, 100, oldObj["oneVar4"], newObj["oneVar4"]);
  new_letter["oneVar5"] = map(percent, 0, 100, oldObj["oneVar5"], newObj["oneVar5"]);
  new_letter["oneVar6"] = map(percent, 0, 100, oldObj["oneVar6"], newObj["oneVar6"]);
  new_letter["oneVar7"] = map(percent, 0, 100, oldObj["oneVar7"], newObj["oneVar7"]);
  new_letter["oneVar8"] = map(percent, 0, 100, oldObj["oneVar8"], newObj["oneVar8"]);

  //new_letter["twoVar1"]    = map(percent, 0, 100, oldObj["twoVar1"], newObj["twoVar1"]);
  //new_letter["twoVar2"] = map(percent, 0, 100, oldObj["twoVar2"], newObj["twoVar2"]);
  //new_letter["twoVar3"] = map(percent, 0, 100, oldObj["twoVar3"], newObj["twoVar3"]);
  //new_letter["twoVar4"]    = map(percent, 0, 100, oldObj["twoVar4"], newObj["twoVar4"]);
  //new_letter["twoVar5"] = map(percent, 0, 100, oldObj["twoVar5"], newObj["twoVar5"]);
  //new_letter["twoVar6"] = map(percent, 0, 100, oldObj["twoVar6"], newObj["twoVar6"]);
  //new_letter["twoVar7"] = map(percent, 0, 100, oldObj["twoVar7"], newObj["twoVar7"]);
  //new_letter["twoVar8"] = map(percent, 0, 100, oldObj["twoVar8"], newObj["twoVar8"]);
 
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
