var xs=[], ys=[];
var x1=[], y1=[];
var x2=[], y2=[];

function setup() {
  createCanvas(600, 600);
  noStroke();
  for (var i = 0; i <60; i++) {
    append(xs, random(width));
    append(ys, random(height));
  }
   for (var i = 0; i <200; i++) {
    append(x1, random(width));
    append(y1, random(height));
  }
  for (var i = 0; i<200; i++) {
    append(x2, random(width));
    append(y2, random(height));
  }
}


function draw() {
  var h = hour();
  var m = minute();
  var s = second();

  if(h == 12 || h == 0) {
    h = 12;
  }
  else {
    h = h%12;
  }


  background(250, 250, 250, 100);

  push();
  for (var i = 0; i < 200; i++) {
    fill(255);
    ellipse(x1[i], y1[i], 1, 1);
  }
  pop();

  push();
  for (var i = 0; i < s; i++) {
    drawSnow(xs[i], ys[i], 1, 20, 7);
  }
  pop();

  
  push();
  fill(218, 237, 247, 100 );
  rect(0, 0, 600, 600-map(minute(), 0, 60, 0, 600));
  pop();

  push();
  textSize(40);
  textFont('Helvetica')
  fill(192,192,192, 240);
  text('the current time is: ' + h + ':' + m + ':' + s, 0, 570);
  pop();
}


function drawSnow(x, y, rad1, rad2, npoints) {
  fill(64, 164, 224);
  var angle = TWO_PI/npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for(var a=0; a<TWO_PI; a+=angle) {
    var sx = x + cos(a) * rad2;
    var sy = y + sin(a) * rad2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * rad1;
    sy = y + sin(a+halfAngle) * rad1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


