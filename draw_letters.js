/* these are optional special variables which will change the system */
var systemBackgroundColor = "#8F99FB";
var systemLineColor = "#D3D3D3";
var systemBoxColor = "#C73869";

/* internal constants */
const secondSpacing = 5; // space between first outer bezier and second bezier
const thirdSpacing = 10; // space between first outer bezier and third bezier 
const fourthSpacing = 15; // space between first outer bezier and fourth bezier 
const fifthSpacing = 20; // space between first outer bezier and fifth bezier
const solidSpacing = 15; // space from centre of solid bezier shape

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {

  colorMode(HSB, 360, 100, 100, 100);

  lined(letterData); // lined bezier curves
  solid(letterData); // solid bezier shape

}

/* lined bezier curves */
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

  // white, blue, white gradient
  let white = color(0, 0, 99, opacity); // opaque white
  let white25 = color(0, 0, 99, opacity - 75); // 25% opacity white
  let white15 = color(0, 0, 99, opacity - 85); // 15% opacity white

  var grad = this.drawingContext.createLinearGradient(linedX1, linedY1, linedX4, linedY4);
  grad.addColorStop(0, white);
  grad.addColorStop(.4, white25);
  grad.addColorStop(.5, white15);
  grad.addColorStop(.6, white25);
  grad.addColorStop(1, white);

  push();
  this.drawingContext.strokeStyle = grad; // gradient stroke colour
  strokeWeight(1.25); // stroke weight
  noFill(); // no fill
  // first(outer) bezier
  bezier(linedX1, linedY1, linedX2, linedY2, linedX3, linedY3, linedX4, linedY4);
  // second bezier
  bezier(linedX1, linedY1, linedX2 + secondSpacing, linedY2 + secondSpacing, linedX3 + secondSpacing, linedY3 - secondSpacing, linedX4, linedY4);
  // third bezier
  bezier(linedX1, linedY1, linedX2 + thirdSpacing, linedY2 + thirdSpacing, linedX3 + thirdSpacing, linedY3 - thirdSpacing, linedX4, linedY4);
  // fourth bezier
  bezier(linedX1, linedY1, linedX2 + fourthSpacing, linedY2 + fourthSpacing, linedX3 + fourthSpacing, linedY3 - fourthSpacing, linedX4, linedY4);
  // fifth bezier
  bezier(linedX1, linedY1, linedX2 + fifthSpacing, linedY2 + fifthSpacing, linedX3 + fifthSpacing, linedY3 - fifthSpacing, linedX4, linedY4);
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

  let white = color(0, 0, 99, opacity); // opaque white

  // bezier shape
  push();
  noStroke(); // no stroke
  fill(white); // white fill
  beginShape();
  vertex(solidX1, solidY1);
  bezierVertex(solidX2 + solidSpacing, solidY2, solidX3 + solidSpacing, solidY3, solidX4, solidY4);
  bezierVertex(solidX3 - solidSpacing, solidY3, solidX2 - solidSpacing, solidY2, solidX1, solidY1);
  endShape();
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  /* lined bezier curves interpolation */
  let maxX = 100; // maximum bounding box x coordinate
  let oneQuarterX = 25; // 1/4 bounding box x coordinate
  let threeQuarterX = 75; // 3/4 bounding box x coordinate
  let minX = 0; // minimum bounding box x coordinate

  // to spinning starting point
  if (percent < 33){
    new_letter["linedVar1"] = map(percent, 0, 33, oldObj["linedVar1"], maxX);
    new_letter["linedVar3"] = map(percent, 0, 33, oldObj["linedVar3"], threeQuarterX);
    new_letter["linedVar5"] = map(percent, 0, 33, oldObj["linedVar5"], oneQuarterX);
    new_letter["linedVar7"] = map(percent, 0, 33, oldObj["linedVar7"], minX);
  }
  // to spinning end point
  else if (percent > 33 && percent < 66) {
    new_letter["linedVar1"] = map(percent, 33, 66, maxX, minX);
    new_letter["linedVar3"] = map(percent, 33, 66, threeQuarterX, oneQuarterX);
    new_letter["linedVar5"] = map(percent, 33, 66, oneQuarterX, threeQuarterX);
    new_letter["linedVar7"] = map(percent, 33, 66, minX, maxX);
  }
  // to new letter
  else {
    new_letter["linedVar1"] = map(percent, 66, 100, minX, newObj["linedVar1"]);
    new_letter["linedVar3"] = map(percent, 66, 100, oneQuarterX, newObj["linedVar3"]);
    new_letter["linedVar5"] = map(percent, 66, 100, threeQuarterX, newObj["linedVar5"]);
    new_letter["linedVar7"] = map(percent, 66, 100, maxX, newObj["linedVar7"]);
  }

  /* solid bezier interpolation */
  let centreX = 50; // Horizontally centre solid bezier
  let centreY = 95; // Shrink and vertically centre solid bezier length

  // shorten
  if(percent < 50){
    new_letter["solidVar1"] = map(percent, 0, 50, oldObj["solidVar1"], centreX);
    new_letter["solidVar2"] = map(percent, 0, 50, oldObj["solidVar2"], centreY);
    new_letter["solidVar3"] = map(percent, 0, 50, oldObj["solidVar3"], centreX);
    new_letter["solidVar4"] = map(percent, 0, 50, oldObj["solidVar4"], centreY);
    new_letter["solidVar5"] = map(percent, 0, 50, oldObj["solidVar5"], centreX);
    new_letter["solidVar6"] = map(percent, 0, 50, oldObj["solidVar6"], centreY);
    new_letter["solidVar7"] = map(percent, 0, 50, oldObj["solidVar7"], centreX);
    new_letter["solidVar8"] = map(percent, 0, 50, oldObj["solidVar8"], centreY);
  }
  // lengthen
  else{
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

  // transparent from 25% to 75% of interpolation
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
  "CYCLONE!",
  "!034689!"
]

