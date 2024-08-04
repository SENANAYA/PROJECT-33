const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var starttime=100
var demotime=100
var SNOWS=[]
var SNOWBALLS=[]
var CLOUDS=[];
var snowno=0
var resetgap=200
var cloudno=0
var snowballno=0
var cloud;
var score=0;
var time=0
var shootdel=4000
var snowdel=50
var clouddel=0
var clickdel=5
var maxclickdel=5
var maxclouddel=400
var minsnowdel=30
var minsnowballdel=40
var minclouddel=250
var mouserad =5
var snowballdel=50
var maxsnowdel =50
var maxsnowballdel=100
var bgimg=[]
var snowimg=[]
var boy;
var ground;
var block1,block2;
var sling1,sling2
var GAMESTATE="PLAY";
function preload(){
  bgimg[0] = loadImage("backhsnow.jpg")
bgimg[1] = loadImage("boysnowman.jpg")
bgimg[2]=loadImage("backsnow.jpg")
snowimg[0] = loadImage("snowflakeupradged.png")
snowimg[1] = loadImage("weirdsnowflake.webp")

}
function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  
 GAMESTATE="MENU"
}

function draw() {

if(GAMESTATE==="MENU"){
  frameCount=0
  background(bgimg[0])
  if(starttime>0){
    starttime=starttime-1
    keyCode=-1
  }else{
    if(demotime>0){
      demotime=demotime-1
    }
  push()
 
 textAlign(CENTER,CENTER)
 
 fill(255,0,0,map(demotime,100,0,0,255))
 stroke(150,150,255,map(demotime,100,0,0,255))
 strokeWeight(6)

 
 

 fill(0,255,255,map(demotime,100,0,0,255))
 textSize(70)
 text("ITS SNOW TIME",width/2,70)
 text("LIL' BRO",width/2,150)
 textSize(30)
 fill(255,0,0,map(demotime,100,0,0,255))
 text("clicker",width/2,190)
 stroke(255,0,0,map(demotime,100,0,0,255))
 fill(0,0,0,map(demotime,100,0,0,255))

 text("YOUR LITTLER BROTHER WANTS TO PLAY IN THE SNOW",width/2,height/2-50)
 text("BUT HE GETS SICK IF SNOW LANDS ON HIS BODY ",width/2,height/2)
 text("YOU WANT YOUR LITTLE BROTHER TO BE HAPPY",width/2,height/2+50)
 text("PROTECT HIM WHILE HE IS PLAYING",width/2,height/2+100)
 stroke(0,0,255,map(demotime,100,0,0,255))
 text("Press S to go to the first day",width/2,height/2+150)

textAlign(LEFT)
textSize(26)
stroke(0,0,0,map(demotime,100,0,0,255))
fill(0,255,0,map(demotime,100,0,0,255))
 text("CLICK OFF THE FALLING SNOWFLAKES AND SNOWBALLS",10,height-100)
 textSize(24)
 text("USE YOUR TRUSTY PETER THE SNOWMAN'S SLINGSHOT TO SHOT OFF THE CLOUDS",10,height-50)

 
 pop()
 if(keyCode===83){
  keyCode=-1
  resetobjects()
  resetgroups()
  resetvalues()
  resetobjects()
  GAMESTATE="PLAY"
 }
  }
}
if(GAMESTATE==="LOSE"){
  background(bgimg[2])
  
 resetgroups()
 if(resetgap>0){
  resetgap=resetgap-1
  keyCode=-1
 }else{
 if(keyCode===82){
  
  resetvalues()
  resetobjects()
  
  GAMESTATE="PLAY"
  keyCode=-1
 }
 if(keyCode===77){
GAMESTATE="MENU"
 }
}
 push()
 fill(0,0,0)
 textAlign(CENTER)
 stroke(0,0,0)
 strokeWeight(3)
 textSize(30)
 text("SCORE: "+ score,width-100,50)
 text("TIME: "+ time,100,50)
 textSize(30)
 fill(255,0,0)
 stroke(150,150,255)
 strokeWeight(6)

 text("YOU HAVE GOTTEN YOUR LITTLE BROTHER SICK",width/2,height/2)
 text("NOW HE HAS TO SIT GLOOMILY",width/2,height/2+50)
 text("WATCHING THE OUTSIDE THROUGH HIS WINDOW ALL WINTER",width/2,height/2+100)
 if(resetgap===0){
 noStroke()
 fill(0,0,100)
 text("PRESS R TO REWIND TIME TO TODAY MORNING",width/2,height/2+150)
 fill(0,100,0)

 text("PRESS M TO REWIND TIME TO THIS WINTER ONSET",width/2,height/2+200)
 }
 pop()
}
if(GAMESTATE==="PLAY"){
 delset()
 
  background(bgimg[1]);  
  //drawSprites();
  block1.display()
  block2.display()
  
  ground.display()
  sling1.display()
  sling2.display()
 
  Engine.update(engine);
  
SNOWFLAKES()
SNOWBALLSS()
CLOUDSS()
push()
  fill(0,0,0)
  textAlign(CENTER)
  stroke(10)
  textSize(30)
  text("SCORE: "+ score,width-100,50)
  text("TIME: "+ time,100,50)
  pop()
}
}

