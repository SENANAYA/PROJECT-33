class BLOCK{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          mass: 0,
          collisionFilter : {
            'group': -1,
            'category': 2,
            'mask': 0,
          }
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
