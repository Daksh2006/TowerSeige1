const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var o1,o2,o3,o4,o5,o6;
var backgroundImg,platform;
var player, chain;
var bg,score;

var gameState = "onSling";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;

    ground = new Ground(600,height,1200,20);
    player = new Player(200,50);

    o1 = new Objects(800,110);
    o2 = new Objects(800,160);
    o3= new Objects(800,210);
    o4 = new Objects(800,260);
    o5 = new Objects(800,310);
    o6 = new Objects(800,360);

    chain = new Chain(player.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg){}
    background(0);
    noStroke();
    textSize(35);
    fill("white");
    text("Score:" + score,width-300,50);
    Engine.update(engine);
    ground.display();
    o1.display();
    o2.display();
    o3.display();
    o4.display();
    o5.display();
    o6.display();
    o1.score();
    o2.score();
    o3.score();
    o4.score();
    o5.score();
    o6.score();
    player.display();
    chain.display();    
}

function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    chain.attach(player.body);
    }
}


