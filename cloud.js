class CLOUD{
    constructor(x,y,radius1,radius2,spdl){
        var options={
            mass:100,
            isStatic:true,
            collisionFilter : {
                'group': -1,
                'category': 2,
                'mask': 0,
              }
        }
        this.body = Bodies.circle(x,y,radius1,options)
        this.radius1 = radius1
        this.radius2 = radius2
        this.maxinit=250
this.init=this.maxinit
        this.bot = Math.round(Math.random(0,1)) 
       this.displayoff= false
      //  this.image = snowimg[this.bot]
        this.no = cloudno
        this.constfactor=1.3
        this.maxspawndel=spdl
        this.spawndel=this.maxspawndel
        this.health=2
        World.add(world,this.body)
    }
    display(){
        if(this.init>0){
            this.init=this.init-1
            var pos = this.body.position
            var angle = this.body.angle;
            var scale=1.3
            var tor = this.constfactor
            var ext =20
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill(255,255,255,map(this.init,this.maxinit,0,0,255))
            noStroke()
            ellipse(this.radius1/2,this.radius2/2+this.radius2/10,(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
            ellipse(0,(this.radius2/2+this.radius2/4),(this.radius1*tor*1.3-10+ext)*scale,(this.radius2*tor*1.3+10)*scale)
            ellipse(0,-(this.radius2/2+this.radius2/4),(this.radius1*tor*1.3-10+ext)*scale,(this.radius2*tor*1.3+10)*scale)
            ellipse(-this.radius1/2,this.radius2/2+this.radius2/10,(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
            ellipse(this.radius1/2,-(this.radius2/2+this.radius2/10),(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
            ellipse(-this.radius1/2,-(this.radius2/2+this.radius2/10),(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
           ellipse(0,0,(this.radius1*2.5+ext)*scale,(this.radius2*2.1-10)*scale)
          
            pop();
        }else{
        var pos = this.body.position
        var angle = this.body.angle;
        var scale=1.3
        var tor = this.constfactor
        var ext =20
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255,255,255,255/2*this.health)
        noStroke()
        ellipse(this.radius1/2,this.radius2/2+this.radius2/10,(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
        ellipse(0,(this.radius2/2+this.radius2/4),(this.radius1*tor*1.3-10+ext)*scale,(this.radius2*tor*1.3+10)*scale)
        ellipse(0,-(this.radius2/2+this.radius2/4),(this.radius1*tor*1.3-10+ext)*scale,(this.radius2*tor*1.3+10)*scale)
        ellipse(-this.radius1/2,this.radius2/2+this.radius2/10,(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
        ellipse(this.radius1/2,-(this.radius2/2+this.radius2/10),(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
        ellipse(-this.radius1/2,-(this.radius2/2+this.radius2/10),(this.radius1*tor+ext)*scale,(this.radius2*tor)*scale)
       ellipse(0,0,(this.radius1*2.5+ext)*scale,(this.radius2*2.1-10)*scale)
      
        pop();
       if(this.spawndel>0){
        this.spawndel=this.spawndel-1
       }
    if(this.spawndel===0){
       var SNOWSsx=random(pos.x-(this.radius1*2.5+ext)*scale/3,pos.x+(this.radius1*2.5+ext)*scale/3)
       var SNOWSsy=random(pos.y-(this.radius2*2.5+ext)*scale/3,pos.y+(this.radius2*2.5+ext)*scale/3)
       SNOWS[snowno]=new SNOW(SNOWSsx,SNOWSsy,random(30,40))
    
        snowno++
        this.spawndel=Math.round(random(this.maxspawndel-20,this.maxspawndel+20))
       
    }
            
    }
}
}