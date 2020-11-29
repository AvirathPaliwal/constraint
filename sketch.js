
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var boy,boyimage
var tree
var stone 
var mango
var sling
function preload()
{
boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(1350, 650);
    rectMode(CENTER)
	boy=createSprite(200, 530, 10,10);
	boy.addImage(boyimage)
	boy.scale=0.1
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(650,600,1400,30);
	stone=new Stone(200,200,50,50)
	tree=new Tree (1300,600,50,50)	
	mango=new Mango(200,200,50,50);
    sling = new Slingshot(stone.body,{x:200,y:200});
	}


function draw() {
  rectMode(CENTER);
  background(155);
  ground.display();
  stone.display();
  tree.display();
  mango.display();
  sling.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body ,{x:mouseX , y: mouseY})
  }
  function mouseReleased(){
	sling.fly()
  
  }


