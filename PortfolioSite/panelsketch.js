let flip=1;
let scaler=7;
let count=0;
let a=0;
let b=0;
let c=0;
function setup() {

  var Canvas=createCanvas(500, 900,WEBGL);
  Canvas.parent("leftImagePanel");
  angleMode(DEGREES);
  stroke(254,217,183);
  rectMode(CENTER);
}

function draw() {
   let c1=color(254,101+frameCount*random(0,5),86,random(0,40));
  let c2=color(255+frameCount*random(10,50),208,149);
  let mix=lerpColor(c1,c2,random(frameCount*1,frameCount*20));
  background(mix,random(50,60))
rotateY(frameCount*0.3);
  rotateX(frameCount*0.2);
   fill(240,113,103,random(200,240));



drawRectSpin();

}

function drawRectSpin()
{
  let d=0;
  let flip=1;
 for (x=0;x<34;x++){
  rotate(45*flip);
   //staggers the shapes
  push();
  translate(0,0);
  rotateY(sin(frameCount*(1*(0.2+0.1*d))));
  rotateX(cos(frameCount*(flip*(0.2+0.1*d))));
  rect(0,0,260-x*8+15,260-x*8+15);
  pop();

  flip=flip*(-1)
  c=c+1;
  d=d+1;
  }

}
