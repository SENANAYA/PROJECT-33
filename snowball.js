class SNOWBALL{
    constructor(x,y,radius,onsling){
        var options={
            mass:100
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.onsling = onsling
        this.bot = Math.round(Math.random(0,1)) 
       this.displayoff= false
       this.onslinged=false
      //  this.image = snowimg[this.bot]
        this.no = snowballno
        this.health=2
        World.add(world,this.body)
    }
    display(){
        if(this.onsling==="Being"){
           
            if((mouseX-block1.meanx)*(mouseX-block1.meanx)+(mouseY-block1.meany)*(mouseY-block1.meany)<(block1.radii)*(block1.radii)){
                Matter.Body.setPosition(this.body, {x: mouseX , y: mouseY});
                }else{
                  Matter.Body.setPosition(this.body, {x: evalmidpoint(mouseX,mouseY,block1.meanx,block1.meany,block1.radii).x , y:evalmidpoint(mouseX,mouseY,block1.meanx,block1.meany,block1.radii).y});
                }
        }
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255,255,255,255/2*this.health)
       ellipse(0,0,this.radius*2,this.radius*2)
        
        if(this.onsling==="Being"){
            push()
            stroke(7)
            strokeWeight(8)
            line(0,0,evalmidpoint(block1.meanx,block1.meany,this.body.position.x,this.body.position.y,-this.radius).x-pos.x,evalmidpoint(block1.meanx,block1.meany,this.body.position.x,this.body.position.y,-this.radius).y-pos.y)
            pop()
        }
        pop()
        if(pos.y>windowHeight-100&&Mod(this.body.velocity.y)<0.5&&this.onsling===false){
           
          
        
            SNOWBALLS.splice(this.no,1)
            
            snowballno=snowballno-1
            for (var SNO of SNOWBALLS){
                if(SNO.no>this.no){
                    SNO.no=SNO.no-1
                    }
            }
      if(SNOWBALLS[this.no]===undefined===false){
   
      SNOWBALLS[this.no].displayoff=true
      }
      
      World.remove(world,this.body)
            
          }else
      
            if(pos.y>windowHeight){
             
            SNOWBALLS.splice(this.no,1)
            
            snowballno=snowballno-1
            for (var SNO of SNOWBALLS){
                if(SNO.no>this.no){
                    SNO.no=SNO.no-1
                    }
            }
      if(SNOWBALLS[this.no]===undefined===false){
   
      SNOWBALLS[this.no].displayoff=true
      }
      
      
      World.remove(world,this.body)
            }
            
            
    }
}