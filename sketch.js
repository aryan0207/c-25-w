
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
     
  
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=Bodies.rectangle(width/2,400,width,10,{
	isStatic:true	
	});
	dustbin=new Dustbin(720,390,100,10);
    paper=new Paper(100,300,10)

   world.add(world,ground);
}


function draw() {
 background("black")
 rectMode(CENTER);
  background(0);
 

  paper.display();
  dustbin.display();



function keyPressed(){
	if(keyCode===UP_ARROW){
	matter.Body.applyForce(paper.body,paper.body.position,{
	x:12,
	y:-13
	});
}
	}
}
