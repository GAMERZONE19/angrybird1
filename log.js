class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;  namespacing = nickname
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);//measures the displacement of an object
      rotate(angle);// for our logs
      rectMode(CENTER);
      strokeWeight(4); // border thickness
      stroke("green")// to create borders
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  