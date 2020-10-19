
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbinpart1,dustbinpart2,dustbinpart3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50,200,40);
	ground1 = new Ground(10,650,8000,20);
	
	dustbinpart1 = new Dustbin(500,580,20,120);
	dustbinpart2 = new Dustbin(700,580,20,120);
	dustbinpart3 = new Dustbin(600,630,220,20);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  paper1.display();
  ground1.display();
  dustbinpart1.display();
  dustbinpart2.display();
  dustbinpart3.display();
  keyPressed();
  drawSprites();
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-3})
}
if(keyCode === DOWN_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-3,y:3})
}
}


