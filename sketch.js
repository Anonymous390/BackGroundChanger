
var r = 255;
var g = 255;
var b=255;
var circle;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  circle = createSprite(70, 200, 40, 40);

}


function draw(){
  background(r, g, b);
  circle.x = World.mouseX;
  circle.y = World.mouseY;
  
  r = map(World.mouseX, 0, 1200, 55, 140);
  g = map(World.mouseX, 0, 1200, 210, 120);
  b = map(World.mouseX, 0, 1200, 185, 90);

  r = map(World.mouseY, 0, 1200, 145, 65);
  g = map(World.mouseY, 0, 1200, 125, 220);
  b = map(World.mouseY, 0, 1200, 95, 195);

  circle.tint = "red";

  drawSprites();
}