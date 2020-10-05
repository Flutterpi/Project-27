
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(420,500,80);
    bob2 = new Bob(500,500,80);
    bob3 = new Bob(580,500,80);
    bob4 = new Bob(660,500,80);
    bob5 = new Bob(740,500,80);
	roof = new Roof(590,200,500,40);
	rope1 = new Rope(bob1.body,roof.body,-80*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(249,235,198);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();
}



