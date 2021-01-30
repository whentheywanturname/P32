
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var thehoop, Coby,sweet	
var world;
var Back;

function preload(){
Back = loadImage("pics/bg.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	Coby=new balle(200,450,70);
	sweet=new ground(width/2,670,width,20);
thehoop=new hoop(1200,650);
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(Back);
 
  
  Coby.display();
  sweet.display();
  thehoop.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(Coby.body,Coby.body.position,{x:130,y:-145});

    
  	}
}