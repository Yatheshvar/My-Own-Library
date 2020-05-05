var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(isTouching(fixedrect,movingrect))
  {
   movingrect.shapeColor="red";
   fixedrect.shapeColor="red";
  }

  else
  {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  
  drawSprites();
}

