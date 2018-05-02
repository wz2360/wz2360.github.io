 var data = [22,851,5356,7991,5960,3891,2344,1798,1244,892,136,91];
 var color1= '#E8F8F5';
 var color2= '#D1F2EB';
 var color3= '#A3E4D7';
 var color4= '#76D7C4';
 var color5= '#48C9B0';
 var color6= '#16A085';
 var color7= '#A2D9CE';
 var color8= '#1ABC9C';
 var color9= '#17A589';
 var color10= '#148F77';
 var color11= '#0E6251';
 var color12= '#117864';

  var piedata = [], piecolor = [color8,color6,color3,color4,color5,color7,color1,color2,color9,color10,color11,color12];
  var mouseAngle = 0, pieDelta = 0, hover = 0;

  function setup() {
    createCanvas(800,800); 
    total = data.reduce(function(a,b){ return a+b; }, 0);
    for(var i = 0, count = 0 ;i < data.length; i++) {
      piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
      count += data[i];
    }
  }

  function draw() {

    //clear canvas each time

    clear(); 
    for(var i=0,dx=0,dy=0; i<piedata.length; i++,dx = 0, dy = 0) {
      fill(piecolor[i%5]);
      
      //slide the pie when mouse on it
      
      if(mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
        dx = Math.cos((piedata[i][0] + piedata[i][1])/2) * 10;
        dy = Math.sin((piedata[i][0] + piedata[i][1])/2) * 10;
      }
      
      //draw the piechart
      
      arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], PIE);
    }
  }

  function mouseMoved() {
    mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
    if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
  }

  function draw2(){
  ellipse(320, 200, 150, 150,);
  fill(white);
   }

   
