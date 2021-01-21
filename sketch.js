const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage('GamingBackground.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(350,300,700,10);
    hero = new Hero(200,100,200,75);
    rope = new Rope(hero.body,{x:200,y:10});
    box1 = new Box(400,280,30,30);
    box2 = new Box(400,250,30,30);
    box3 = new Box(400,220,30,30);
    box4 = new Box(400,190,30,30);
    box5 = new Box(400,160,30,30);
    box6 = new Box(400,130,30,30);
    box7 = new Box(400,100,30,30);
    
    box8 = new Box(450,280,30,30);
    box9 = new Box(450,250,30,30);
    box10 = new Box(450,220,30,30);
    box11 = new Box(450,190,30,30);
    box12 = new Box(450,160,30,30);
    box13 = new Box(450,130,30,30);
    
    box14 = new Box(500,280,30,30);
    box15 = new Box (500,250,30,30);
    box16 = new Box (500,220,30,30);
    box17 = new Box (500,190,30,30);
    box18 = new Box (500,160,30,30);
    box19 = new Box(500,130,30,30);
    box20 = new Box(500,100,30,30);
    box21 = new Box(500,70,30,30);

    box22 = new Box(550,280,30,30);
    box23 = new Box(550,250,30,30);
    box24 = new Box(550,220,30,30);
    box25 = new Box(550,190,30,30);
    box26 = new Box(550,160,30,30);

    monster = new Monster(700,200,100,100);

}

function draw(){
    background(backgroundImg);

    Engine.update(engine);

    /*if(isTouching(box1.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box2.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box3.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box4.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box5.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box6.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box7.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box8.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box9.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box10.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box11.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box12.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box13.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box14.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box15.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box16.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box17.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box18.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box19.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box20.body,monster.body)){
      Matter.Body.setStatic(monster.body,false);
    }*/
    if(isTouching(box21,monster)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box22,monster)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box23,monster)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box24,monster)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box25,monster)){
      Matter.Body.setStatic(monster.body,false);
    }
    if(isTouching(box26,monster)){
      Matter.Body.setStatic(monster.body,false);
    }

    ground.display();
    hero.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    monster.display();
}

function mouseDragged(){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function isTouching(Lbox,Lmonster){
	monsterPos = Lmonster.body.position;
	boxPos = Lbox.body.position;
	
	var distance=dist(boxPos.x,boxPos.y,monsterPos.x,monsterPos.y);
	if(distance<=Lmonster.r+Lbox.r){
    //Matter.Body.setStatic(Lmonster.body,false);
    return true;
  }
  else{
    return false;
  }
}