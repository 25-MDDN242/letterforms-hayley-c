/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E5E0D9";
var systemLineColor = "#D3D3D3";
var systemBoxColor = "#C73869";

/* internal constants */

const centreSpacing = 10; // space between outer bezier and middle bezier lines
const innerSpacing = 20; // space between outer bezier and inner bezier lines
const solidSpacing = 15; // space from centre of solid bezier shape

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);

  push();
  push();
  lined(letterData); // lined bezier shape
  pop();

  solid(letterData); // solid bezier shape
  pop();
}

/* lined bezier shape */
function lined(letterData){
  // lined bezier parameters
  let opacity = letterData["opacity"]; 
  let bezierOneX1 = letterData["oneVar1"]; // first anchor x 
  let bezierOneY1 = letterData["oneVar2"]; // first anchor y
  let bezierOneX2 = letterData["oneVar3"]; // first control point x
  let bezierOneY2 = letterData["oneVar4"]; // first control point y
  let bezierOneX3 = letterData["oneVar5"]; // second control point x
  let bezierOneY3 = letterData["oneVar6"]; // second control point y
  let bezierOneX4 = letterData["oneVar7"]; // second anchor point x
  let bezierOneY4 = letterData["oneVar8"]; // second anchor point y
  
  stroke(137, 152, 177, opacity); // light grey
  strokeWeight(3); // stroke weight
  noFill(); // no fill
  // outer curve
  bezier(bezierOneX1, bezierOneY1, bezierOneX2, bezierOneY2, bezierOneX3, bezierOneY3, bezierOneX4, bezierOneY4);
  // middle curve
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + centreSpacing, bezierOneY2 + centreSpacing, bezierOneX3 + centreSpacing, bezierOneY3 - centreSpacing, bezierOneX4, bezierOneY4);
  // inner curve
  bezier(bezierOneX1, bezierOneY1, bezierOneX2 + innerSpacing, bezierOneY2 + innerSpacing, bezierOneX3 + innerSpacing, bezierOneY3 - innerSpacing, bezierOneX4, bezierOneY4);
}

/* solid bezier curve */
function solid(letterData){
  // solid bezier parameters
  let opacity = letterData["opacity"]; 
  let bezierTwoX1 = letterData["twoVar1"]; // first anchor point x 
  let bezierTwoY1 = letterData["twoVar2"]; // first anchor point y
  let bezierTwoX2 = letterData["twoVar3"]; // first control point x
  let bezierTwoY2 = letterData["twoVar4"]; // first control point y
  let bezierTwoX3 = letterData["twoVar5"]; // second control point x
  let bezierTwoY3 = letterData["twoVar6"]; // second control point y
  let bezierTwoX4 = letterData["twoVar7"]; // second anchor point x
  let bezierTwoY4 = letterData["twoVar8"]; // second anchor point y
  
  noStroke(); // no stroke
  fill(137, 152, 177, opacity); // light grey
  //curve shape
  beginShape();
  vertex(bezierTwoX1, bezierTwoY1);
  bezierVertex(bezierTwoX2 + solidSpacing, bezierTwoY2, bezierTwoX3 + solidSpacing, bezierTwoY3, bezierTwoX4, bezierTwoY4);
  bezierVertex(bezierTwoX3 - solidSpacing, bezierTwoY3, bezierTwoX2 - solidSpacing, bezierTwoY2, bezierTwoX1, bezierTwoY1);
  endShape();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  /* Lined bezier interpolation */

  let maxX = 100; // maximum bounding box x coordinate
  let oneQuarter = 25; // 1/4 bounding box x coordinate
  let threeQuarter = 75; // 3/4 bounding box x coordinate
  let minX = 0; // minimum bounding box x coordinate

  if (percent < 33){
    new_letter["oneVar1"] = map(percent, 0, 33, oldObj["oneVar1"], maxX);
    new_letter["oneVar3"] = map(percent, 0, 33, oldObj["oneVar3"], threeQuarter);
    new_letter["oneVar5"] = map(percent, 0, 33, oldObj["oneVar5"], oneQuarter);
    new_letter["oneVar7"] = map(percent, 0, 33, oldObj["oneVar7"], minX);
  }
  else if (percent > 33 && percent < 66) {
    new_letter["oneVar1"] = map(percent, 33, 66, maxX, minX);
    new_letter["oneVar3"] = map(percent, 33, 66, threeQuarter, oneQuarter);
    new_letter["oneVar5"] = map(percent, 33, 66, oneQuarter, threeQuarter);
    new_letter["oneVar7"] = map(percent, 33, 66, minX, maxX);
  }
  else {
    new_letter["oneVar1"] = map(percent, 66, 100, minX, newObj["oneVar1"]);
    new_letter["oneVar3"] = map(percent, 66, 100, oneQuarter, newObj["oneVar3"]);
    new_letter["oneVar5"] = map(percent, 66, 100, threeQuarter, newObj["oneVar5"]);
    new_letter["oneVar7"] = map(percent, 66, 100, maxX, newObj["oneVar7"]);
  }

  /* Solid bezier interpolation */

  let transparent = 0.10; // minimum opacity
  let centreX = 50; // Horizontally centre solid bezier
  let centreY = 95; // Shrink and vertically centre solid bezier length

  if(percent < 50){
    new_letter["opacity"] = map(percent, 0, 50, oldObj["opacity"], transparent);
    new_letter["twoVar1"] = map(percent, 0, 50, oldObj["twoVar1"], centreX);
    new_letter["twoVar2"] = map(percent, 0, 50, oldObj["twoVar2"], centreY);
    new_letter["twoVar3"] = map(percent, 0, 50, oldObj["twoVar3"], centreX);
    new_letter["twoVar4"] = map(percent, 0, 50, oldObj["twoVar4"], centreY);
    new_letter["twoVar5"] = map(percent, 0, 50, oldObj["twoVar5"], centreX);
    new_letter["twoVar6"] = map(percent, 0, 50, oldObj["twoVar6"], centreY);
    new_letter["twoVar7"] = map(percent, 0, 50, oldObj["twoVar7"], centreX);
    new_letter["twoVar8"] = map(percent, 0, 50, oldObj["twoVar8"], centreY);
  }
  else{
    new_letter["opacity"] = map(percent, 50, 100, transparent, newObj["opacity"]);
    new_letter["twoVar1"] = map(percent, 50, 100, centreX, newObj["twoVar1"]);
    new_letter["twoVar2"] = map(percent, 50, 100, centreY, newObj["twoVar2"]);
    new_letter["twoVar3"] = map(percent, 50, 100, centreX, newObj["twoVar3"]);
    new_letter["twoVar4"] = map(percent, 50, 100, centreY, newObj["twoVar4"]);
    new_letter["twoVar5"] = map(percent, 50, 100, centreX, newObj["twoVar5"]);
    new_letter["twoVar6"] = map(percent, 50, 100, centreY, newObj["twoVar6"]);
    new_letter["twoVar7"] = map(percent, 50, 100, centreX, newObj["twoVar7"]);
    new_letter["twoVar8"] = map(percent, 50, 100, centreY, newObj["twoVar8"]);
  }

  /* linear interpolation */

  // new_letter["opacity"] = map(percent, 0, 100, oldObj["opacity"], newObj["opacity"]);

  // new_letter["oneVar1"] = map(percent, 0, 100, oldObj["oneVar1"], newObj["oneVar1"]);
  new_letter["oneVar2"] = map(percent, 0, 100, oldObj["oneVar2"], newObj["oneVar2"]);
  // new_letter["oneVar3"] = map(percent, 0, 100, oldObj["oneVar3"], newObj["oneVar3"]);
  new_letter["oneVar4"] = map(percent, 0, 100, oldObj["oneVar4"], newObj["oneVar4"]);
  // new_letter["oneVar5"] = map(percent, 0, 100, oldObj["oneVar5"], newObj["oneVar5"]);
  new_letter["oneVar6"] = map(percent, 0, 100, oldObj["oneVar6"], newObj["oneVar6"]);
  // new_letter["oneVar7"] = map(percent, 0, 100, oldObj["oneVar7"], newObj["oneVar7"]);
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
  "TWISTING",
  "SWIRLING",
  "SPIRALED",
  "WHIRLING",
  "TWIRLING",
  "PAINTED"
]

