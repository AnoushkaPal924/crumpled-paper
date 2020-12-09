
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var gameState = "launched";

var engine, world ;
var dustbin
var crump
function preload() {

 
  crump = loadImage("paper.png")

}
function setup() {
	createCanvas(800, 500);
  engine = Engine.create();
  
	//engine = Engine. create        ();
	world = engine.world;

  ground2 = new Ground(400,450,800,10);
    paper1 = new Paper(360,410,30,30);
   wall1 = new Bin( 700,405,10,80 );
   wall2 = new Bin( 600,405,10,80 );
   bin1 = new SBin(650,400,120,100)
   dustbin = loadImage("dustbin.png")
   sling1 = new Sling(paper1.body,{x:100,y:100}),
   //image(crump,paper1.x,paper1.y);
   image(dustbin,700,405,10,80)
	//Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
 

  ground2.display();
  paper1.display();
  wall1.display();
  wall2.display();
  bin1.display();
  sling1.display();
 

  drawSprites();
 
}
function keyPressed(){
  console.log('kp')
  if (keyCode === UP_ARROW){
    console.log('paper');
   Body.applyForce(paper1.body, paper1.body.position, {x:85,y:-85})
  }
}
// function keyPressed (){
 
// }
function mouseReleased(){
  //console.log('lolo')
     sling1.fly();
     gameState = "launched";
 }

 function mouseDragged(){
  // console.log('lol')
 if (gameState == "launched"){
  //console.log('yay')
        Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
    }
 }

 




