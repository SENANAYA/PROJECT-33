class SNOW{
    constructor(x,y,radius){
        var options={
mass:0.001,
friction:0,

        }
        this.body = Bodies.circle(x,y,radius,options)
       
        this.radius = radius
        this.bot = Math.round(Math.random(0,1)) 
       this.displayoff= false
        this.image = snowimg[this.bot]
        this.no = snowno
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        if(this.body.velocity.y>this.bot*2+4+Math.round(time/100)+this.radius/40){
            Matter.Body.setVelocity(this.body,{x:0,y:this.bot*2+4+Math.round(time/100)+this.radius/40})
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
        if(pos.y>windowHeight-100&&Mod(this.body.velocity.y)<0.5){
           
          
        
            SNOWS.splice(this.no,1)
      
            snowno=snowno-1
   
    for (var SNO of SNOWS){
        if(SNO.no>this.no){
            SNO.no=SNO.no-1
            }
    }
      if(SNOWS[this.no]===undefined===false){
      SNOWS[this.no].displayoff=true
      }
      World.remove(world,this.body)
            
          }else
      
            if(pos.y>windowHeight){
             
            SNOWS.splice(this.no,1)
            
            snowno=snowno-1
            for (var SNO of SNOWS){
                if(SNO.no>this.no){
                SNO.no=SNO.no-1
                }
            }
            if(SNOWS[this.no]===undefined===false){
                SNOWS[this.no].displayoff=true
                }
      World.remove(world,this.body)
            }
            
            
    }
}