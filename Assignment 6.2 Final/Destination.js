var Street = ["Broadway & W 60 ST", "Riverside Blvd & W 72 ST", "5 Ave & E 78 ST", "5 Ave & E 88 ST", "W 59 ST & 10 Ave", ];
var Counts = [18, 15, 10, 8, 6];
var lengthMultiplier = 2; 

function setup(){
  createCanvas(1000,1000);
  noLoop();
}

function draw(){
  for (var i =0; i < Street.length; i++){
    fill(0);
    rect(10, 20 + 50 * i, Counts[i] * lengthMultiplier, 20);
  }
  for (var i = 0; i < Counts.length; i++){
   text(Counts[i], 20+Counts[i] * lengthMultiplier, 35 + 50 * i);
}

for
    (var i = 0; i < Counts.length; i++){
    text(Street[i], 10, 55 + 50 * i); 
  }
}




