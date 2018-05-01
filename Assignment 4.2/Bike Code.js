var Street = ["Adam Clayton Powell Blvd at 113th Street", "Adam Clayton Powell Blvd at 113th Street", "Central Park West at W93 St", "Fifth Avenue at 14 St", "First Avenue at E85 St", "Fort Washington Avenue at 173rd Street","Hudson Street/Eighth Avenue at W28 St","Lafayette Street at Astor Pl","Second Avenue at E7 St","Sixth Avenue at W23 St"];
var Counts = [40, 265, 139, 292, 104, 48, 329, 395, 410, 577];
var lengthMultiplier = 1; 

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




