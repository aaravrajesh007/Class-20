var fr,mr;
var r1,r2;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "pink";

  mr = createSprite(500, 200, 50, 50);
  mr.shapeColor = "pink";

  r1 = createSprite(400, 100, 50, 50);
  r1.shapeColor = "pink";
  r1.velocityX=4;

  r2 = createSprite(700, 100, 50, 50);
  r2.shapeColor = "green";
  r2.velocityX=-4;
}

function draw() {
  background(0);
  mr.x=mouseX;
  mr.y=mouseY;  
  if((mr.x-fr.x<mr.width/2+fr.width/2)&&(fr.x-mr.x<mr.width/2+fr.width/2)&&
  (mr.y-fr.y<mr.height/2+fr.height/2)&&(fr.y-mr.y<mr.height/2+fr.height/2)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  } 
  else{
    mr.shapeColor = "pink";
    fr.shapeColor = "pink";

  }

  if((r1.x-r2.x<r1.width/2+r2.width/2)&&(r2.x-r1.x<r1.width/2+r2.width/2)&&
  (r1.y-r2.y<r1.height/2+r2.height/2)&&(r2.y-r1.y<r1.height/2+r2.height/2)){
    r1.velocityX=r1.velocityX*(-1);
    r2.velocityX=r2.velocityX*(-1);

  }
  drawSprites();
}