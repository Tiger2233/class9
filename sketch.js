
var ball






function setup() {
  createCanvas(400,600);
  ball= createSprite(200,300,40,30)
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    ball.y -=5
  }
 
 if (keyIsDown(DOWN_ARROW)){
   ball.y  +=5
 }
 
 if (keyIsDown(RIGHT_ARROW)){
   ball.x +=5
 }
 
 if (keyIsDown(LEFT_ARROW)){
   ball.x  -=5
 }
 
  drawSprites()
}




