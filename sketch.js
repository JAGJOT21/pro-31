const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;
var snowBg
var snowfall = []
var engine
var world

function preload (){

   snowBg = loadImage ("snow2.jpg")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 
}



function draw() {
  background(snowBg);  
  Engine.update(engine);

  if(frameCount%60===0){
    snowfall.push(new Snow(random(1,800),10,10))
  }
  for (var k = 0; k < snowfall.length; k++) {
    snowfall[k].display();
  }
 
}

