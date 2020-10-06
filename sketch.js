
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
    rope1 = new Rope(bob1.body,roof.body,-85*2,0);
    rope2 = new Rope(bob2.body,roof.body,-45*2,0);
    rope3 = new Rope(bob3.body,roof.body,-5*2,0);
    rope4 = new Rope(bob4.body,roof.body,35*2,0);
    rope5 = new Rope(bob5.body,roof.body,75*2,0);

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
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



