var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("gray");  

   //Translation and rotation 
   translate(200,200)
   rotate(-90)

   //Calculating time using predefined func from p5.js
   hr = hour();
   mn = minute();
   sc = second();

   //To create ab iterative rotation
   scAngle = map(sc, 0, 60, 0, 360);
   mnAngle = map(mn,0,60,0,360)
   hrAngle = map(hr % 12,0,12,0,360)

  
   push();
   rotate(scAngle); 
   stroke("green");
   strokeWeight(7);
   line(0,0,100,0);
   pop()

   
   push();
   rotate(mnAngle);
   stroke('blue');
   strokeWeight(10);
   line(0,0,75,0);
   pop()

   
   push();
   rotate(hrAngle);
   stroke("white");
   strokeWeight(10);
   line(0,0,50,0);
   pop()

   stroke(255,0,255);
   point(0,0)

   
   strokeWeight(10);
   noFill();
   
   stroke("green");
   arc(0,0,300,300,0,scAngle);
   
   stroke("blue");
   arc(0,0,280,280,0,mnAngle);
   
   stroke("white");
   arc(0,0,260,260,0,hrAngle);
}
