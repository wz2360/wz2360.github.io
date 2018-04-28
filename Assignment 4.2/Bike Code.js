LocationName= {};
Total = {};
var nums;
  var LocationName_ = [];
  var Total_ = [];

function preload() {
  data = loadTable("TIMS_DCPBikeCounts_ON_Street_2014.csv", "csv", "header");
}

function setup() {

  createCanvas(1600,1700); //3300
  BikeCounts();
  orderData();
}

function draw() {

  background(255, 230, 204);
  push();
  fill(204, 105, 0); 
  textSize(25);
  text("Bike Counts on 16 locations", 40, 30);
  pop();

  var x,y,w,h;
  margin = 40;
  translate(margin,margin);


  noStroke();
  fill(255, 156, 51);

  var new_height = 3300;
  var new_width = 2000;

  for (var i = 0; i < items.length; i++) {
    x = 0;
    y = ((new_height-20)*(i/items.length))*0.5;
    w = (new_width+20)/80*items[i][1];
    h = ((new_height+20)/items.length)-30;
    //console.log(items[i][0]);

    push();                    
    translate(x,y);            
    rect(0,0,w,h);             
    fill(204, 105, 0); 
    textStyle(BOLD);                
    text(items[i][0],10,(h+10)/2);      
    pop();                    
  }


}

function BikeCounts() {
  var LocationName = data.getColumn("LocationName");
  var Total = data.getColumn("Total");

  }



function orderData() {


items = Object.keys(avgTime).map(function(key) {
    return [key, avgTime[key]];
});

items.sort(function(first, second) {
    return second[1] - first[1];
});

console.log(avgTime);




