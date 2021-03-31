
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constrainedlog=Matter.constraint;


var dustbinObj,groundObject	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Constrainedlog=new log(230,180,80,PI/2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
Constrainedlog.display();
strokeWeight(3)
    line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y)

}

