class Paper{
    constructor(x, y, radius,options) {
        var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, radius,options);
        //this.body = ellipse(x, y, radius, options);
        this.image = loadImage("paper.png")
          this.radius = radius
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // ellipseMode(CENTER);
        //ellipse(0, 0, this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
}