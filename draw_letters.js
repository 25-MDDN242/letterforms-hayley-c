/* these are optional special variables which will change the system */
// var systemBackgroundColor = "#4287F5";
var systemBackgroundColor = "#E0FFFF";
var systemLineColor = "#D3D3D3";
var systemBoxColor = "#C73869";

/* internal constants */

const centreSpacing = 10; // space between outer bezier and middle bezier lines
const innerSpacing = 20; // space between outer bezier and inner bezier lines
const solidSpacing = 15; // space from centre of solid bezier shape

const second = 5; // space between outer bezier and middle bezier lines
const fourth = 15; // space between outer bezier and inner bezier lines
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  // colorMode(RGB, 255, 255, 255, 1);
  colorMode(HSB, 360, 100, 100, 100);

  lined(letterData); // lined bezier shape
  solid(letterData); // solid bezier shape

}

/* lined bezier shape */
function lined(letterData){
  // lined bezier parameters
  let opacity = letterData["opacity"]; 
  let linedX1 = letterData["linedVar1"]; // first anchor x 
  let linedY1 = letterData["linedVar2"]; // first anchor y
  let linedX2 = letterData["linedVar3"]; // first control point x
  let linedY2 = letterData["linedVar4"]; // first control point y
  let linedX3 = letterData["linedVar5"]; // second control point x
  let linedY3 = letterData["linedVar6"]; // second control point y
  let linedX4 = letterData["linedVar7"]; // second anchor point x
  let linedY4 = letterData["linedVar8"]; // second anchor point y

  // drawingContext.strokeStyle = gradient;
  push();
  var grad = this.drawingContext.createLinearGradient(linedX1, linedY1, linedX4, linedY4);
  // grad.addColorStop(0, color(0, 0, 99, opacity));
  // grad.addColorStop(.4, color(0, 0, 99, opacity - 75));
  // grad.addColorStop(.5, color(0, 0, 99, opacity - 85));
  // grad.addColorStop(.6, color(0, 0, 99, opacity - 75));
  // grad.addColorStop(1, color(0, 0, 99, opacity));

  grad.addColorStop(0, color(153, 48, 94, opacity));
  grad.addColorStop(.33, color(315, 90, 68, opacity));
  grad.addColorStop(1, color(276, 43, 63, opacity));

  this.drawingContext.strokeStyle = grad;
  strokeWeight(1.25); // stroke weight
  noFill(); // no fill
  // outer curve
  bezier(linedX1, linedY1, linedX2, linedY2, linedX3, linedY3, linedX4, linedY4);
  // middle curve
  bezier(linedX1, linedY1, linedX2 + centreSpacing, linedY2 + centreSpacing, linedX3 + centreSpacing, linedY3 - centreSpacing, linedX4, linedY4);
  // inner curve
  bezier(linedX1, linedY1, linedX2 + innerSpacing, linedY2 + innerSpacing, linedX3 + innerSpacing, linedY3 - innerSpacing, linedX4, linedY4);


  bezier(linedX1, linedY1, linedX2 + second, linedY2 + second, linedX3 + second, linedY3 - second, linedX4, linedY4);
  bezier(linedX1, linedY1, linedX2 + fourth, linedY2 + fourth, linedX3 + fourth, linedY3 - fourth, linedX4, linedY4);
  pop();
}

/* solid bezier curve */
function solid(letterData){
  // solid bezier parameters
  let opacity = letterData["opacity"]; 
  let solidX1 = letterData["solidVar1"]; // first anchor point x 
  let solidY1 = letterData["solidVar2"]; // first anchor point y
  let solidX2 = letterData["solidVar3"]; // first control point x
  let solidY2 = letterData["solidVar4"]; // first control point y
  let solidX3 = letterData["solidVar5"]; // second control point x
  let solidY3 = letterData["solidVar6"]; // second control point y
  let solidX4 = letterData["solidVar7"]; // second anchor point x
  let solidY4 = letterData["solidVar8"]; // second anchor point y

  push();
  noStroke(); // no stroke
  // fill(253, 253, 253, opacity); // light grey
  // fill(0, 0, 99, opacity);
  // fill(276, 43, 63, opacity);

  var grad = this.drawingContext.createLinearGradient(solidX1, solidY1, solidX4, solidY4);
  grad.addColorStop(0, color(153, 48, 94, opacity));
  grad.addColorStop(.33, color(315, 90, 68, opacity));
  grad.addColorStop(1, color(276, 43, 63, opacity));
  this.drawingContext.fillStyle = grad;

  //curve shape
  beginShape();
  vertex(solidX1, solidY1);
  bezierVertex(solidX2 + solidSpacing, solidY2, solidX3 + solidSpacing, solidY3, solidX4, solidY4);
  bezierVertex(solidX3 - solidSpacing, solidY3, solidX2 - solidSpacing, solidY2, solidX1, solidY1);
  endShape();
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  /* Lined bezier interpolation */
  let maxX = 100; // maximum bounding box x coordinate
  let oneQuarterX = 25; // 1/4 bounding box x coordinate
  let threeQuarterX = 75; // 3/4 bounding box x coordinate
  let minX = 0; // minimum bounding box x coordinate

  // from old letter to spinning starting point
  if (percent < 33){
    new_letter["linedVar1"] = map(percent, 0, 33, oldObj["linedVar1"], maxX);
    new_letter["linedVar3"] = map(percent, 0, 33, oldObj["linedVar3"], threeQuarterX);
    new_letter["linedVar5"] = map(percent, 0, 33, oldObj["linedVar5"], oneQuarterX);
    new_letter["linedVar7"] = map(percent, 0, 33, oldObj["linedVar7"], minX);
  }
  // from spinning start point to spinning end point
  else if (percent > 33 && percent < 66) {
    new_letter["linedVar1"] = map(percent, 33, 66, maxX, minX);
    new_letter["linedVar3"] = map(percent, 33, 66, threeQuarterX, oneQuarterX);
    new_letter["linedVar5"] = map(percent, 33, 66, oneQuarterX, threeQuarterX);
    new_letter["linedVar7"] = map(percent, 33, 66, minX, maxX);
  }
  // from spinning end point to new letter
  else {
    new_letter["linedVar1"] = map(percent, 66, 100, minX, newObj["linedVar1"]);
    new_letter["linedVar3"] = map(percent, 66, 100, oneQuarterX, newObj["linedVar3"]);
    new_letter["linedVar5"] = map(percent, 66, 100, threeQuarterX, newObj["linedVar5"]);
    new_letter["linedVar7"] = map(percent, 66, 100, maxX, newObj["linedVar7"]);
  }

  /* Solid bezier interpolation */
  let centreX = 50; // Horizontally centre solid bezier
  let centreY = 95; // Shrink and vertically centre solid bezier length

  if(percent < 50){
    // new_letter["opacity"] = map(percent, 0, 50, oldObj["opacity"], transparent);
    new_letter["solidVar1"] = map(percent, 0, 50, oldObj["solidVar1"], centreX);
    new_letter["solidVar2"] = map(percent, 0, 50, oldObj["solidVar2"], centreY);
    new_letter["solidVar3"] = map(percent, 0, 50, oldObj["solidVar3"], centreX);
    new_letter["solidVar4"] = map(percent, 0, 50, oldObj["solidVar4"], centreY);
    new_letter["solidVar5"] = map(percent, 0, 50, oldObj["solidVar5"], centreX);
    new_letter["solidVar6"] = map(percent, 0, 50, oldObj["solidVar6"], centreY);
    new_letter["solidVar7"] = map(percent, 0, 50, oldObj["solidVar7"], centreX);
    new_letter["solidVar8"] = map(percent, 0, 50, oldObj["solidVar8"], centreY);
  }
  else{
    // new_letter["opacity"] = map(percent, 50, 100, transparent, newObj["opacity"]);
    new_letter["solidVar1"] = map(percent, 50, 100, centreX, newObj["solidVar1"]);
    new_letter["solidVar2"] = map(percent, 50, 100, centreY, newObj["solidVar2"]);
    new_letter["solidVar3"] = map(percent, 50, 100, centreX, newObj["solidVar3"]);
    new_letter["solidVar4"] = map(percent, 50, 100, centreY, newObj["solidVar4"]);
    new_letter["solidVar5"] = map(percent, 50, 100, centreX, newObj["solidVar5"]);
    new_letter["solidVar6"] = map(percent, 50, 100, centreY, newObj["solidVar6"]);
    new_letter["solidVar7"] = map(percent, 50, 100, centreX, newObj["solidVar7"]);
    new_letter["solidVar8"] = map(percent, 50, 100, centreY, newObj["solidVar8"]);
  }

  /* opacity interpolation */
  let transparent = 40; // minimum opacity
  if(percent < 25){
    new_letter["opacity"] = map(percent, 0, 25, oldObj["opacity"], transparent);
  }
  else if (percent > 75){
    new_letter["opacity"] = map(percent, 75, 100, transparent, newObj["opacity"]);
  }
  else {
    new_letter["opacity"] = transparent
  }

  /* linear interpolation */
  new_letter["linedVar2"] = map(percent, 0, 100, oldObj["linedVar2"], newObj["linedVar2"]);
  new_letter["linedVar4"] = map(percent, 0, 100, oldObj["linedVar4"], newObj["linedVar4"]);
  new_letter["linedVar6"] = map(percent, 0, 100, oldObj["linedVar6"], newObj["linedVar6"]);
  new_letter["linedVar8"] = map(percent, 0, 100, oldObj["linedVar8"], newObj["linedVar8"]);

  return new_letter;
}

var swapWords = [
  "FEATHERY",
  "TWISTING",
  "WHISPERS",
  "SWIRLING",
  "!BREEZE!",
  "SPIRALED",
  "!CLOUDY!",
  "WHIRLING",
  "!FLURRY!",
  "TWIRLING",
  "FLOATING",
  "DRIFTING",
  "CYCLONE!"
]

