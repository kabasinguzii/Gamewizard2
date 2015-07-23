var bg;
var ball;
var x=100;
var y=30;
var x1=150;
var x2=50;
var xSpeed=5;
var ySpeed=8;
var xSpeed1=5;
var xSpeed2=5;
var rectxPos=400;
var rectyPos=400;
var recty1Pos=30;
var y1=500;
var y2=500;
var y3=500;
var abar=1;
var sprite1;
var sprite2;
var sprite3;
var sprite4;
var score=0;
var time = 0;
var gameover;
var rectyPos1=1;
var life=5;
var lifeover;
var textrestart=250;
//creates the canvas at a width of 900 and height of 500
function setup(){
	createCanvas (800,500);
	//loads the background image
	bg=loadImage("backi.jpg");
	sprite1=loadImage("bar2.png");
	sprite2=loadImage("bar2.png");
	sprite3=loadImage("bar2.png");
	gameover=loadImage("gameover.png")
	sprite4=loadImage("barbar.png");
	lifeover=loadImage("gameover.jpg.png");
}
function draw(){
	
	//drawing the background image
	background(0,0,0);
	textSize(22);
	fill(255,255,255);
	text("PRESS F5 TO RESTART GAMEWIZARD",textrestart,475)
	fill(255,255,255);
	textSize(22);
	text("SCORE",10,100);
	text(score,10,150);
	fill(255,0,0);
	textSize(30);
	text("LIFE",10,270);
	text(life,10,300);
	//drawing the circle and filling it with color red
	fill(255,0,0);
	ellipse(x,y,50,50);
	
	fill(0,255,0);
	ellipse(x1,y,50,50);
	fill(0,255,0);
	ellipse(x2,y,50,50);
	x = x + xSpeed;
	x1 = x1+ xSpeed1;
	x2 =x2 + xSpeed2;
	fill(0,255,0);
	image(sprite1,0,y1,300,300);
	image(sprite1,500,y2,300,300);
	image(sprite3,300,y3,300,300);
	image(sprite4,abar,30,200,200);
	y1=y1-1;
	y2=y2-1;
	y3=y3-1;
	abar=abar-3;
	textrestart=textrestart-2;
	if (textrestart<0){
	textrestart=width;
	}
	if (y1<-20){
	y1=height;
	
	}
	if (abar<0){
	abar=width;
	}
	if (y2<-20){
	y2=height;
	}
	if (x> width||x<0){
	x=xSpeed*-1
	}
	if (x1> width||x1<0){
	x1=xSpeed1*-1
	}
	if (x2> width||x2<0){
	x2=xSpeed2*-1
	}
	if (y3<-20){
	y3=height;
	}

	if (rectyPos ==(0,0)) {
	return (rectxPos=400, rectyPos=400);
	}

	if (keyIsDown(LEFT_ARROW)){
 	rectxPos-=5;
	}
	if (keyIsDown(RIGHT_ARROW)){
	rectxPos+=4;
	}
	if (keyIsDown(UP_ARROW)){
	rectyPos-=5;

	}
	if (keyIsDown(DOWN_ARROW)){
	rectyPos+=5;
	}
	
	rect(rectxPos,rectyPos,50,50);
	var color=get(rectxPos -2,rectyPos -2);

	rect(rectxPos,rectyPos,2,2);
	fill(255,0,0);
	if (color[0]==255 && color[1]==0 && color[2]==0 ){	  
	
	text((score=score+10),20,110);
	rectyPos = 400;
	}else if (color[0]==0 && color[1]==255 && color[2]==0){
	rectyPos=400;
	text((life=life-1),10,300);
	
	
	
	}
	
	if (frameCount % 30 == 0){
		time++;	
	}
	console.log(time);
	fill(255,255,255);
	text("TIME ELLAPSED",10 ,200);
	text(time,50,230);
	if (time >= 120){
		clear();
		background(gameover);
		reload
	}
	
	console.log(key==="s"||key==="S")
	console.log(key==="q"|| key==="Q")
	if (key==="s"||key==="S"){
	rectyPos=rectyPos-5;
	if (key==="q"||key==="Q"){
	rectyPos=400;
	}
	}
	if  (life<0){
	clear();
	background(lifeover);
}	
}	

