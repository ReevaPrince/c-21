var movingRect, FixedRect, gameObj1, gameObj2, gameObj3, gameObj4, gameObj5;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 30, 60);
  movingRect.shapeColor  = "yellow"
  FixedRect = createSprite(400, 200,60, 30);
  FixedRect.shapeColor  = "yellow"

  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "yellow";
  gameObj2 = createSprite(200,100,50,50);
  gameObj2.shapeColor = "yellow";
  gameObj3 = createSprite(300,100,50,50);
  gameObj3.shapeColor = "yellow";
  gameObj4= createSprite(400,100,50,50);
  gameObj4.shapeColor = "yellow";
  gameObj5 = createSprite(500,100,50,50);
  gameObj5.shapeColor = "yellow";
 
  movingRect.debug = true
  FixedRect.debug = true
}

function draw() {
  background(10,10,10);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObj1)){
  movingRect.shapeColor  = "blue"
 gameObj1.shapeColor  = "blue"
  }
 else{
    movingRect.shapeColor  = "yellow"
  gameObj1.shapeColor  = "yellow"
 }
bounceOff(movingRect,FixedRect)
  drawSprites();
}
