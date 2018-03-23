function setup() {
  createCanvas(600, 500);
}

function draw() {
  background('white');
  fill(146, 229, 255, 150);

  // Map the function second() to values from 0~400
  push(); // Start a new drawing state
  rect(0, 0, 100, map(second(), 0, 60, 0, 500));
  rect(100, 0, 100, map(second()-10, 0, 60, 0, 500));
  rect(200, 0, 100, map(second()-20, 0, 60, 0, 500));
  rect(300, 0, 100, map(second()-30, 0, 60, 0, 500));
  rect(400, 0, 100, map(second()-40, 0, 60, 0, 500));
  rect(500, 0, 100, map(second()-50, 0, 60, 0, 500));
  
  push(); 
  fill(146, 229, 255, 150);
  rect(0, 0, 100, map(minute(), 0, 60, 0, 500));
  rect(100, 0, 100, map(minute()-10, 0, 60, 0, 500));
  rect(200, 0, 100, map(minute()-20, 0, 60, 0, 500));
  rect(300, 0, 100, map(minute()-30, 0, 60, 0, 500));
  rect(400, 0, 100, map(minute()-40, 0, 60, 0, 500));
  rect(500, 0, 100, map(minute()-50, 0, 60, 0, 500));

  push(); 
  fill(102, 211, 255, 150);
  rect(0, 0, 100, map(hour(), 0, 12, 0, 500));
  rect(50, 0, 100, map(hour()-1, 0, 12, 0, 500));
  rect(100, 0, 100, map(hour()-2, 0, 12, 0, 500));
  rect(150, 0, 100, map(hour()-3, 0, 12, 0, 500));
  rect(200, 0, 100, map(hour()-4, 0, 12, 0, 500));
  rect(250, 0, 100, map(hour()-5, 0, 12, 0, 500));
  rect(300, 0, 100, map(hour()-6, 0, 12, 0, 500));
  rect(350, 0, 100, map(hour()-7, 0, 12, 0, 500));
  rect(400, 0, 100, map(hour()-8, 0, 12, 0, 500));
  rect(450, 0, 100, map(hour()-9, 0, 12, 0, 500));
  rect(500, 0, 100, map(hour()-10, 0, 12, 0, 500));
  rect(550, 0, 100, map(hour()-11, 0, 12, 0, 500));
}


