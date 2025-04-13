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
  let scaleX = letterData["scale"];

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

  push();
  angleMode(DEGREES);
  shearX(letterData["shear"]);
  scale(scaleX, 1);
  push();

    // lined bezier curve
    stroke(217, 217, 217);
    strokeWeight(3);
    noFill();
    bezier(bezierOneX1, bezierOneY1, bezierOneX2, bezierOneY2, bezierOneX3, bezierOneY3, bezierOneX4, bezierOneY4);
    bezier(bezierOneX1, bezierOneY1, bezierOneX2 + spacing, bezierOneY2 + spacing, bezierOneX3 + spacing, bezierOneY3 - spacing, bezierOneX4, bezierOneY4);
    bezier(bezierOneX1, bezierOneY1, bezierOneX2 + 2 * spacing, bezierOneY2 + 2 * spacing, bezierOneX3 + 2 * spacing, bezierOneY3 - 2 * spacing, bezierOneX4, bezierOneY4);

  pop();
    // solid bezier curve
    noStroke();
    fill(217, 217, 217);
    beginShape();
    vertex(bezierTwoX1, bezierTwoY1);
    bezierVertex(bezierTwoX2 + 1.5 * spacing, bezierTwoY2, bezierTwoX3 + 1.5 * spacing, bezierTwoY3, bezierTwoX4, bezierTwoY4);
    bezierVertex(bezierTwoX3 - 1.5 * spacing, bezierTwoY3, bezierTwoX2 - 1.5 * spacing, bezierTwoY2, bezierTwoX1, bezierTwoY1);
    endShape();
    pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  // REFLECTION
  // let reflected = -1;
  // if (percent < 50){
  //   // new_letter["scale"] = map(percent, 0, 50, oldObj["scale"], reflected);
  //   new_letter["shear"] = map(percent, 0, 50, oldObj["shear"], fullShear);
  // }
  // else {
  //   // new_letter["scale"] = map(percent, 50, 100, reflected, newObj["scale"]);
  //   new_letter["shear"] = map(percent, 50, 100, fullShear, newObj["shear"]);
  // }


  if (percent < 25){
    new_letter["shear"] = map(percent, 0, 25, oldObj["shear"], -45);
  }
  else if (percent >= 25 && percent < 75){
    new_letter["shear"] = map(percent, 25, 75, -45, 54);
  }
  else {
    new_letter["shear"] = map(percent, 75, 100, 45, newObj["shear"]);
  }

  if (percent < 50){
    new_letter["scale"] = map(percent, 0, 50, oldObj["scale"], 0);
  }
  else {
    new_letter["scale"] = map(percent, 50, 100, 0, newObj["scale"])
  }

  // //MIN MAX
  // let maxX = 100;
  // let minX = 0;

  // if (percent < 25){
  //   new_letter["oneVar1"] = map(percent, 0, 25, oldObj["oneVar1"], maxX);
  //   new_letter["oneVar7"] = map(percent, 0, 25, oldObj["oneVar7"], minX);
  // }
  // else if (percent > 25 && percent < 50) {
  //   new_letter["oneVar1"] = map(percent, 25, 50, maxX, minX);
  //   new_letter["oneVar7"] = map(percent, 25, 50, minX, maxX);
  // }
  // else if (percent > 50 && percent < 75){
  //   new_letter["oneVar1"] = map(percent, 50, 75, minX, maxX);
  //   new_letter["oneVar7"] = map(percent, 50, 75, maxX, minX);
  // }
  // else {
  //   new_letter["oneVar1"] = map(percent, 75, 100, maxX, newObj["oneVar1"]);
  //   new_letter["oneVar7"] = map(percent, 75, 100, minX, newObj["oneVar7"]);
  // }

  //SHRINK
  let zero = 0;
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

  //new_letter["scale"] = map(percent, 0, 100, oldObj["scale"], newObj["scale"]);
 // new_letter["shear"] = map(percent, 0, 100, oldObj["shear"], newObj["shear"]);

  new_letter["oneVar1"] = map(percent, 0, 100, oldObj["oneVar1"], newObj["oneVar1"]);
  new_letter["oneVar2"] = map(percent, 0, 100, oldObj["oneVar2"], newObj["oneVar2"]);
  new_letter["oneVar3"] = map(percent, 0, 100, oldObj["oneVar3"], newObj["oneVar3"]);
  new_letter["oneVar4"] = map(percent, 0, 100, oldObj["oneVar4"], newObj["oneVar4"]);
  new_letter["oneVar5"] = map(percent, 0, 100, oldObj["oneVar5"], newObj["oneVar5"]);
  new_letter["oneVar6"] = map(percent, 0, 100, oldObj["oneVar6"], newObj["oneVar6"]);
  new_letter["oneVar7"] = map(percent, 0, 100, oldObj["oneVar7"], newObj["oneVar7"]);
  new_letter["oneVar8"] = map(percent, 0, 100, oldObj["oneVar8"], newObj["oneVar8"]);

  // new_letter["twoVar1"] = map(percent, 0, 100, oldObj["twoVar1"], newObj["twoVar1"]);
  // new_letter["twoVar2"] = map(percent, 0, 100, oldObj["twoVar2"], newObj["twoVar2"]);
  // new_letter["twoVar3"] = map(percent, 0, 100, oldObj["twoVar3"], newObj["twoVar3"]);
  // new_letter["twoVar4"] = map(percent, 0, 100, oldObj["twoVar4"], newObj["twoVar4"]);
  // new_letter["twoVar5"] = map(percent, 0, 100, oldObj["twoVar5"], newObj["twoVar5"]);
  // new_letter["twoVar6"] = map(percent, 0, 100, oldObj["twoVar6"], newObj["twoVar6"]);
  // new_letter["twoVar7"] = map(percent, 0, 100, oldObj["twoVar7"], newObj["twoVar7"]);
  // new_letter["twoVar8"] = map(percent, 0, 100, oldObj["twoVar8"], newObj["twoVar8"]);
 
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

