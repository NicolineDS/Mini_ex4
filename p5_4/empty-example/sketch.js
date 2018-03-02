var img;
var imga;
var imgb;
var imgc;
var imgd;
var imge;
var imgf;
var imgg;

var x = 930;
var x1 = 910;
var x2 = 955;
var x3 = 931;
var y = 641;
var y1=631;
var y2=632;
var y3=669;


function preload() {
  img= loadImage('assets/Instagram.jpg');
  imga= loadImage('assets/Reddit.jpg');
  imgb=loadImage('assets/Facebook.jpg');
  imgc= loadImage('assets/Pinterest.jpg');
  imgd= loadImage('assets/Snapchat.jpg');
  imge= loadImage('assets/Tumblr.jpg');
  imgf= loadImage('assets/Twitter.jpg');
  imgg= loadImage('assets/Youtube.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // fill(value);
  imageMode(CENTER);
  background(44,229,133);
  image(img,1194,703,120,120);
  image(imga,1189,541,120,120);
  image(imgb,950,469, 120, 120);
  image(imgc,1124,904,120,120);
  image(imgd,952,1001,120,120);
  image(imge,760,905,120,120);
  image(imgf,742,719,120,120);
  image(imgg,798,527,170,170);

fill(0);
textSize(62);
text('Try to escape from social media',660,192);
textSize(32);
text('use the arrow keys to move the man around',977,232);

  //man
  //head
  fill(200, 150, 100);
  ellipse(x,y,100,100);

  //eyeleft
  fill(0,0,255);
  ellipse(x1,y1,30,30);

  //eyeright
  fill(0,0,255);
  ellipse(x2,y2,30,30);

  //Mouth
  fill(255,0,0);
  ellipse(x3,y3,15,15);

  if(dist(x,y,1124,904) < 45+60 || dist(x,y,1194,703)<45+60 ||
   dist(x,y,1189,541)<45+60 || dist(x,y,950,469)< 45+60 || dist(x,y,952,1001)
   < 45+60 || dist(x,y,760,905)< 45+60 || dist(x,y,742,719)< 45+60 ||
   dist(x,y,798,527)< 45+60){
     x = 930;
     x1 = 910;
     x2 = 955;
     x3 = 931;
     y = 641;
     y1=631;
     y2=632;
     y3=669;

   }

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x-10;
    x1 = x1-10;
    x2 = x2-10;
    x3 = x3-10;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
    x = x+10;
    x1 = x1+10;
    x2 = x2+10;
    x3 = x3+10;

  }

  if (keyCode === UP_ARROW) {
    y = y-10;
    y1 = y1-10;
    y2 = y2-10;
    y3 = y3-10;
  } else if (keyCode === DOWN_ARROW) {
    value = 0;
    y = y+10;
    y1 = y1+10;
    y2 = y2+10;
    y3 = y3+10;

  }
}

function mousePressed(){
  console.log(mouseX, mouseY);
}
