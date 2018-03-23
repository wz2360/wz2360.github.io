var sec_xs=[], sec_ys=[], sec_angles=[];
var min_xs=[], min_ys=[], min_angles=[];
var second_colors = ['rgba(81,149,72,1)', 'rgba(136,196,37,1)', 'rgba(190,242,2,1)'];
var minute_colors = ['rgba(204,97,71,1)', 'rgba(240,159,39,1)', '#CC724C'];
var bkgrd_color = 'rgba(27,103,107,1)';

function setup() {
  createCanvas(640, 640);
  background(bkgrd_color);
  textSize(16);
  textAlign(CENTER);
  fill('rgba(190,242,2,0.75)');
  text("loading...", 320, 320);

  frameRate(1);            // 1 FPS
  stroke(bkgrd_color);
  angleMode(DEGREES);
  textAlign(LEFT);

  //populate arrays for flower, leaf coordinates
  for (var i = 0; i < 60; i++) {
    sec_xs[i] = random(width);
    sec_ys[i] = random(height);
    sec_angles[i] = random(360);
    min_xs[i] = random(width);
    min_ys[i] = random(height);
    min_angles[i] = random(360);
  }
}

function draw() {
  background(bkgrd_color);

  for (var i = 0; i < second(); i++) {
    drawSeconds(sec_xs[i], sec_ys[i], sec_angles[i], i%second_colors.length);
  }

  for (var i = 0; i < minute(); i++) {
    drawMinutes(min_xs[i], min_ys[i], min_angles[i], hour(), i%minute_colors.length);
  }

  showTime();
}

function drawSeconds(x, y, angle, color) {
  push();
  translate(x, y);
  rotate(angle);
  stroke(bkgrd_color);
  fill(second_colors[color]);
  ellipse(0, 0, 13, 26);
  line(0,-4,0,13);
  stroke(second_colors[color]);
  line(0,12,0,18);
  pop();
}

function drawMinutes(x, y, angle, hour, color) {
  push();
  fill(minute_colors[color]);
  translate(x, y);
  rotate(angle);
  for (var i = 0; i < hour; i++) {
    push();
    rotate(360*i/hour);
    ellipse(0, 13, 26*pow(0.92, hour), 26);
    pop();
  }
  fill('#E9D558');
  ellipse(0,0,10,10);
  pop();
}

function testFlowers() {
  for (var i = 0; i < 24; i++) {
    drawFlower(50+100*(i%6), 50+100*(i/6), i+1, i%flower_colors.length);
  }
}

function twoDigits(number) {
  return ("0" + number).slice(-2);
}

function showTime() {
  rectMode(CORNER);
  fill('rgba(27,103,107,0.5)');
  rect(20, 570, 70, 50);

  var time = '';
  time += twoDigits(hour()) + (hour() == 1 ? ' hour\n' : ' hour\n');
  time += twoDigits(minute()) + (minute() == 1 ? ' minute\n' : ' minute\n');
  time += twoDigits(second()) + (second() == 1 ? ' second\n' : ' second');

  textSize(12);
  fill('rgba(190,242,2,0.75)');
  text(time, 25, 585);
}
