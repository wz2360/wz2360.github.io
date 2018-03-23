function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);

  var x=10;
  var y=120;

  var h=hour();
  var m=minute();
  var s=second();
  fill(255);

  if (h>=12){h=h-12}

  hhand= map(h,0,12,0,2*PI);
  mhand= map(m,0,60,0,2*PI);
  shand= map(s,0,60,0,2*PI);
  //
  ellipse(width,width,1100,1100);
  fill(51,165,104)
  arc(width,width,900,900,hhand-(PI/2),-PI/2,PIE);
  fill(118,51,165)
  arc(width,width,700,700,mhand-(PI/2),-PI/2,PIE);
  fill(239,239,98)
  arc(width,width,500,500,shand-(PI/2),-PI/2, PIE);
}