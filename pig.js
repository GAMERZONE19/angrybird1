class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
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
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  