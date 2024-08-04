class SLING{
    constructor(body1,body2) {
      var options = {
         bodyA: body1,
         bodyB: body2,
         stiffness: 0.01,
         length: 10
      }
      this.sling = Constraint.create(options);
      
      World.add(world, this.sling);
    }
    fly(){
      this.sling.bodyB=null
    }
    attach(body){
      this.sling.bodyB=body
    }
    display(){
     push()
      stroke(48,22,8);
            
                strokeWeight(7);
                if(this.sling.bodyB){
                line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x,this.sling.bodyB.position.y);
                }
        pop()     
           
    }
  };
