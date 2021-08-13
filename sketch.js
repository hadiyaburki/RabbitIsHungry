var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, apple
var leavesImg, leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function createApples(){
 
  if (frameCount%50==0){
    apple = createSprite(random(50,350),40,10,10)
    apple.addImage(appleImg)
    apple.velocityY = 10
    apple.scale = 0.07
  }
  
}

function createLeaves(){
  if (frameCount % 50 == 0 ){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leavesImg)
  leaf.velocityY = 6
  leaf.scale = 0.07
  }
}


function draw() 
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples()
  createLeaves()
  rabbit.x = mouseX

  drawSprites(); 
}
