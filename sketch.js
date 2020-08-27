const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ball5, ball2, ball3, ball4;
var chain, chain1, chain2, chain3, chain4;
var roof;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	roof = new Roof(600, 100, 450, 10);
	
	ball = new Ball(400, 400, 50);
	ball2 = new Ball(500, 400, 50);
	ball3 = new Ball(600, 400, 50);
	ball4 = new Ball(700, 400, 50);
	ball5 = new Ball(800, 400, 50);

	chain = new Line(ball.body, {x: 500, y: 100});
	chain2 = new Line(ball2.body, {x: 550, y: 100});
	chain3 = new Line(ball3.body, {x: 600, y: 100});
	chain4 = new Line(ball4.body, {x: 650, y: 100});
	chain5 = new Line(ball5.body, {x: 700, y: 100});
	
	Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  roof.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body, ball.body.position, {x: -0.1, y: -0.1});
  }
}
