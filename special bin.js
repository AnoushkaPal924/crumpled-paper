class SBin{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            opacity : 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png")
        //World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        //rect(0,0, this.width, this.height);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
}