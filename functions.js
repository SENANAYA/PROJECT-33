let M= (x)=> x+mouserad


let Mod = (y)=>{
  return ((x)=>{if(x>0){return x}else{return -x}})(y)
}


function evalmidpoint(x1,y1,x2,y2,d2){
  if(d2<0){
    d1=Math.sqrt(sqr(x2-x1)+sqr(y2-y1)+sqr(d2))
  }else{
d1=Math.sqrt(sqr(x2-x1)+sqr(y2-y1)-sqr(d2))
  }
var midpoint={x:0,y:0}
midpoint.x=(d1*x2+d2*x1)/(d1+d2)
midpoint.y=(d1*y2+d2*y1)/(d1+d2)
return midpoint

}
 let sqr=(p)=>p*p

 function resetgroups(){
    world.bodies.length=[]
   if(sling1===0===false){
    World.remove(world,sling1.sling)
    World.remove(world,sling2.sling)
   }
 SNOWS=[]
 SNOWBALLS=[]
 CLOUDS=[]
 boy = 0
  ground = 0
 
  
  
  block1 = 0
  block2 = 0
 
 
  sling1= 0
  sling2= 0
 
 }

 function resetvalues(){
    snowno=0
    resetgap=200
    cloudno=0
    snowballno=0
   frameCount=0
    score=0;
    time=0
    shootdel=4000
    snowdel=50
    clouddel=0
    clickdel=5
    maxclickdel=5
    maxclouddel=400
    minsnowdel=30
    minsnowballdel=40
    minclouddel=250
    mouserad =5
    snowballdel=50
    maxsnowdel =50
    maxsnowballdel=100
 }
 
 function resetobjects(){
    boy = createSprite(255*width/888,height-200*height/724,130*width/888,300*height/724)
  ground = new GROUND(width/2,height,width,20)
 
  
  
  block1 = new BLOCK(540*width/1052,250*height/724,1,1)
  block2 = new BLOCK(860*width/1052,270*height/724,1,1)
  block1.meanx=(block1.body.position.x+block2.body.position.x)/2
  block1.meany =(block1.body.position.y+block2.body.position.y)/2
  block1.radii=200
  SNOWBALLS.push(new SNOWBALL(block1.meanx,block1.meany,30,true))
  snowballno++
  sling1= new SLING(block1.body,SNOWBALLS[SNOWBALLS.length-1].body)
  sling2= new SLING(block2.body,SNOWBALLS[SNOWBALLS.length-1].body)
 }