var circles = [];

var minRadius = 3;
var maxRadius = 50;

var freeze = false;

var showCircle = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  cursor(cursor);
  ellipseMode(RADIUS);
  rectMode(RADIUS);
}

function draw() {
  background(255);

  // Choose a random or the current mouse position
  var newX = random(maxRadius, width - maxRadius);
  var newY = random(maxRadius, height - maxRadius);


  // Try to fit the largest possible circle at the current location without overlapping
  var intersection = false;
  for (var newR = maxRadius; newR >= minRadius; newR--) {
    for (var i = 0; i < circles.length; i++) {
      var d = dist(newX, newY, circles[i].x, circles[i].y);
      intersection = d < circles[i].r + newR;
      if (intersection) {
        break;
      }
    }
    if (!intersection) {
      circles.push(new Circle(newX, newY, newR));
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {

    if (showCircle) circles[i].draw();
  }

}

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  Circle.prototype.draw = function() {
    stroke(0);
    strokeWeight(1.5);
    ellipse(this.x, this.y, this.r);
  }
}
