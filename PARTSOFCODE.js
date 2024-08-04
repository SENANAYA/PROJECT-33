
let SNOWFLAKES=()=>{
    for(var i=0; i<SNOWS.length;i++){
       
       if(SNOWS[i].body.position.y>boy.y-boy.height/2&&SNOWS[i].body.position.y<boy.y+boy.height/2){
         if(SNOWS[i].body.position.x<boy.x+boy.width/2&&SNOWS[i].body.position.x>boy.x-boy.width/2){
           GAMESTATE="LOSE"
          
         }
       }
       SNOWS[i].display()
       if(SNOWS[i]===undefined===false){
       if(SNOWS[i].displayoff===true){
      
    SNOWS[i].displayoff=false
         i=i-1
        
       }
     }
     if(SNOWS[i]===undefined===false){
   
      if(mouseIsPressed&&clickdel===0){
       if(sqr(mouseX-SNOWS[i].body.position.x)+sqr(mouseY-SNOWS[i].body.position.y)<sqr(M(SNOWS[i].radius))){
          clickdel=maxclickdel
         World.remove(world,SNOWS[i].body)
      score=score+2
   
         SNOWS.splice(i,1)
        
         snowno=snowno-1
         for (var SNO of SNOWS){
           if(SNO.no>i){
             SNO.no=SNO.no-1
             }
       }
         i=i-1
         
       }
     }
   }
   if(SNOWS[i]===undefined===false){
    for(var SNO of SNOWBALLS){
      if(SNOWS[i]===undefined===false){
      if(SNO===undefined===false){
    if(sqr(SNO.body.position.x-SNOWS[i].body.position.x)+sqr(SNO.body.position.y-SNOWS[i].body.position.y)<sqr(SNOWS[i].radius+SNO.radius)){
      World.remove(world,SNOWS[i].body)
      SNOWS.splice(i,1)
     if(SNO.onslinged===true){
  score=score+2
     }
      snowno=snowno-1
      for (var SNOP of SNOWS){
        if(SNOP.no>i){
          SNOP.no=SNOP.no-1
          }
    }
      i=i-1
    }
  }
    }
  }
   }
   if(SNOWS[i]===undefined===false){
    for(var SNO of SNOWS){
      if(SNOWS[i]===undefined===false){
      if(SNO===undefined===false&&(SNO.no===i===false)){
    if((SNO.body.position.x-SNOWS[i].body.position.x)*(SNO.body.position.x-SNOWS[i].body.position.x)+(SNO.body.position.y-SNOWS[i].body.position.y)*(SNO.body.position.y-SNOWS[i].body.position.y)<(SNOWS[i].radius+SNO.radius)*(SNOWS[i].radius+SNO.radius)){
      World.remove(world,SNOWS[i].body)
      World.remove(world,SNO.body)
  
      SNOWS.splice(i,1)
      if(SNO.no>i){
      SNOWS.splice(SNO.no-1,1)
      }else{
        SNOWS.splice(SNO.no,1)
  
      }
      snowno=snowno-2
      for (var SNOLS of SNOWS){
        if(SNOLS.no>i){
          SNOLS.no=SNOLS.no-1
          }
          if(SNO.no>i){
          if(SNOLS.no>SNO.no-1){
            SNOLS.no=SNOLS.no-1
            }
          }else{
            if(SNOLS.no>SNO.no){
              SNOLS.no=SNOLS.no-1
              }
          }
    }
      i=i-1
    }
  }
    }
  }
   }
   }
  }
  let SNOWBALLSS=()=>{
    for(var i=0; i<SNOWBALLS.length;i++){
     
       if(SNOWBALLS[i].body.position.y>boy.y-boy.height/2&&SNOWBALLS[i].body.position.y<boy.y+boy.height/2){
         if(SNOWBALLS[i].body.position.x<boy.x+boy.width/2&&SNOWBALLS[i].body.position.x>boy.x-boy.width/2){
           GAMESTATE="LOSE"
          
         }
       }
       SNOWBALLS[i].display()
       if(SNOWBALLS[i]===undefined===false){
       if(SNOWBALLS[i].displayoff===true){
      
    SNOWBALLS[i].displayoff=false
         i=i-1
        
       }
      }
      if(SNOWBALLS[i]===undefined===false){
      if(mouseIsPressed&&clickdel===0&&SNOWBALLS[i].onsling===false){
       if(sqr(mouseX-SNOWBALLS[i].body.position.x)+sqr(mouseY-SNOWBALLS[i].body.position.y)<sqr(M(SNOWBALLS[i].radius))){
       clickdel=maxclickdel
        if(SNOWBALLS[i].health>1){
          score=score+1
          SNOWBALLS[i].health=SNOWBALLS[i].health-1
          Matter.Body.setVelocity(SNOWBALLS[i].body,{x:0,y:0})
         }else{
        World.remove(world,SNOWBALLS[i].body)
      score=score+5
    
         SNOWBALLS.splice(i,1)
        
         snowballno=snowballno-1
         for (var SNO of SNOWBALLS){
          if(SNO.no>i){
            SNO.no=SNO.no-1
            }
      }
         i=i-1
        }
       }
     }
  
    }
    if(SNOWBALLS[i]===undefined===false){
      for(var SNO of SNOWBALLS){
        if(SNOWBALLS[i]===undefined===false){
        if(SNO===undefined===false&&SNO.onslinged===true&&SNO.body.speed>3&&(SNO.no===i===false)){
      if(sqr(SNO.body.position.x-SNOWBALLS[i].body.position.x)+sqr(SNO.body.position.y-SNOWBALLS[i].body.position.y)<sqr(SNOWBALLS[i].radius+SNO.radius)){
        World.remove(world,SNOWBALLS[i].body)
        
        SNOWBALLS.splice(i,1)
      
    score=score+10
       
        snowballno=snowballno-1
        for (var SNOP of SNOWBALLS){
          if(SNOP.no>i){
            SNOP.no=SNOP.no-1
            }
      }
        i=i-1
      }
    }
      }
    }
    }
    }
  }
  let CLOUDSS=()=>{
  for(var i=0; i<CLOUDS.length;i++){
    CLOUDS[i].display()
    for(var SNO of SNOWBALLS){
      if(CLOUDS[i]===undefined===false){
      if(SNO===undefined===false&&SNO.onslinged===true){
    if(sqr(SNO.body.position.x-CLOUDS[i].body.position.x)+sqr(SNO.body.position.y-CLOUDS[i].body.position.y)<sqr(CLOUDS[i].radius1+SNO.radius)){
      World.remove(world,CLOUDS[i].body)
      
      CLOUDS.splice(i,1)
     if(SNO.onslinged===true){
  score=score+10
     }
      cloudno=cloudno-1
      for (var SNOP of CLOUDS){
        if(SNOP.no>i){
          SNOP.no=SNOP.no-1
          }
    }
      i=i-1
    }
  }
    }
  }
  }
  }
let delset=()=>{
    if (clickdel>0){
        clickdel=clickdel-1
       }
       time =  Math.round(frameCount/60)
        if(snowdel>0){
          snowdel=snowdel-1
        }else{
          SNOWS[snowno]=new SNOW(random(0,width),-50,random(30,40))
          if(time<=200){
          snowdel=Math.round(map(time,0,200,maxsnowdel,minsnowdel))
          }else{
            snowdel=minsnowdel 
          }
          snowno++
         
        }
        if(snowballdel>0){
          snowballdel=snowballdel-1
        }else{
          SNOWBALLS[snowballno]=new SNOWBALL(random(0,width),-50,random(20,25),false)
          if(time<=200){
          snowballdel=Math.round(map(time,0,200,maxsnowballdel,minsnowballdel))
          }else{
            snowdel=minsnowdel
          }
          snowballno++
         
        }
        if(time>15){
      if(clouddel>0){
        clouddel=clouddel-1
      }else{
        CLOUDS[cloudno] = new CLOUD(random(0,width),50,random(70,40),random(20,40),80)
        if(time<=200){
        clouddel=Math.round(map(time,0,200,maxclouddel,minclouddel))
        }else{
          cloudel=minclouddel
        }
        cloudno=cloudno+1
      }
        }
       
}

  function mouseDragged(){
    for(var Snowballs of SNOWBALLS){
      if(Snowballs.onsling===true){
        if((mouseX-Snowballs.body.position.x)*(mouseX-Snowballs.body.position.x)+(mouseY-Snowballs.body.position.y)*(mouseY-Snowballs.body.position.y)<M(Snowballs.radius)*M(Snowballs.radius)){
  Snowballs.onsling="Being"
  
  if((mouseX-block1.meanx)*(mouseX-block1.meanx)+(mouseY-block1.meany)*(mouseY-block1.meany)<(block1.radii)*(block1.radii)){
  Matter.Body.setPosition(Snowballs.body, {x: mouseX , y: mouseY});
  }else{
    Matter.Body.setPosition(Snowballs.body, {x: evalmidpoint(mouseX,mouseY,block1.meanx,block1.meany,block1.radii).x , y:evalmidpoint(mouseX,mouseY,block1.meanx,block1.meany,block1.radii).y});
  }
    }
  }
    }
  }
  function mouseReleased(){
    for(var Snowballs of SNOWBALLS){
      if(Snowballs.onsling==="Being"){
  Snowballs.onsling=false
  Snowballs.onslinged=true
  sling1.fly()
  sling2.fly()
  
  new Promise((resolve,reject)=>{
    var result;
    result = setTimeout(()=>{
   
        if(sling1===0===false){
        SNOWBALLS.push(new SNOWBALL(block1.meanx,block1.meany,30,true))
        snowballno++
        sling1.attach(SNOWBALLS[SNOWBALLS.length-1].body)
          sling2.attach(SNOWBALLS[SNOWBALLS.length-1].body)}},shootdel)
    
        
        if(sling1===0){
            reject()
        }else{
   resolve( result)
  
  }})
  
  
  }
    }
  }