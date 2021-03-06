class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
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
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
