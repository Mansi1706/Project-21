
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2,670,width,20);
  	right = new Ground(800,600,20,120);
  	left = new Ground(1100,600,20,120);



 	ball=Bodies.circle(100,100,5,ball_options)
    World.add(world,ball);


	Engine.run(engine);

	var ball_options={
		isStatic=false,
		restitution=0.3,
		friction=0,
		density:1.2

	}
   var options={
	   restitution=0.95
   }
	
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  keypressed();
  drawSprites();
 
}

function keypressed {
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});  
	}
}

