function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 90, 50);
  movingRect.shapeColor = "coral";
  fixedRect = createSprite(400, 100, 100, 60);
  fixedRect.shapeColor = "coral";

  
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.x-fixedRect.x);
  if  (movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor = "lightgreen";
    fixedRect.shapeColor = "lightgreen";
  } 
  else {
    movingRect.shapeColor = "coral";
    fixedRect.shapeColor = "coral";
  }


  
  
  drawSprites();

}