function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#253763');
  fill(500, 500, 0);

  // Map the function second() to values from 0~400
  rect(0, 0, 60, map(second(), 0, 60, 0, 440));
  rect (0, 440, map(second(),0,60,0,440), 60);
  rect(440, 60, 60, 440-map(second(), 0, 60, 0, 440));
  rect (60, 0, 440-map(second(),0,60,0,440), 60);

  push(); // Start a new drawing state
  ellipse(250, 250, 200, 200);
  pop(); // Restore original state (scale, specifically)
  
    // First change the mode to degrees (default is radians)
  angleMode(DEGREES);
  // Map the function minute() to values from 0~360
  rotate(map(minute()), 0, 60, 0, 360);
  textSize(50);
  fill(0, 102, 153);
  text('UGHHHHH', 250, 250);
}


