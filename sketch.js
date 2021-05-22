var floor,floorImg
var gameState = 1
var player = createSprite(20, 25, 18 ,18);

function preload(){

  floorImg = loadImage("floor.jpg");
  boy1Img = loadAnimation("Sprite boy 1.jpg","Sprite boy 2.jpg","Sprite boy 3.jpg","Sprite boy 4.jpg");
  boy2Img = loadAnimation("Sprite boy 1.jpg");
  door = loadImage
}


function setup() {
  
  createCanvas(1300,750); 


  floor = createSprite(600,300,1200,600);
  floor.addImage(floorImg);
  floor.scale = 6.5;

  boy = createSprite(600,500,20,20);
  boy.addAnimation("standing boy",boy2Img);
  boy.scale = 0.5
  
  var cardboard1 = createSprite(10, 70,200,20);
cardboard1.shapeColor = "brown";

var cardboard2 = createSprite(110,80,20,110);
cardboard2.shapeColor = "yellow";

var cardboard3 = createSprite(200 ,65,100,20);
cardboard3.shapeColor = "brown";

var cardboard4 = createSprite(195,28,20,55);
cardboard4.shapeColor = "red";

var cardboard5 = createSprite(180,170,100,20);
cardboard5.shapeColor = "maroon";

var cardboard6 = createSprite(235,145,20,100);
cardboard6.shapeColor = "yellow";

var cardboard7 = createSprite(305,50,20,80);
cardboard7.shapeColor = "red";

var cardboard8 = createSprite(310,120,100,20);
cardboard8.shapeColor = "maroon";

var cardboard9 = createSprite(20,220,100,20);
cardboard9.shapeColor = "brown"; 

var cardboard10 = createSprite(70,210,20,100);
cardboard10.shapeColor = "yellow";

var cardboard11 = createSprite(200,250,100,20);
cardboard11.shapeColor = "red";

var cardboard12 = createSprite(45,310,100,20);
cardboard12.shapeColor = "maroon";

var cardboard13 = createSprite(50 ,360,20,80);
cardboard13.shapeColor = "brown";

var cardboard14 = createSprite(250,285,20,90);
cardboard14.shapeColor = "yellow";

var cardboard15 = createSprite(300,220,20,100);
cardboard15.shapeColor = "red";

var cardboard16 = createSprite(340,280,100,20);
cardboard16.shapeColor = "brown";

var cardboard17 = createSprite(250,330,100,20);
cardboard17.shapeColor = "maroon";

var cardboard18 = createSprite(360,330,20,80);
cardboard18.shapeColor = "red";

var cardboard19 = createSprite(180,390,20,140);
cardboard19.shapeColor = "yellow";

var cardboard20 = createSprite(150,220,90,20);
cardboard20.shapeColor = "brown";

var cardboard21 = createSprite(375,85,20,100);
cardboard21.shapeColor = "yellow";

var cardboard22 = createSprite(110,380,80,20);
cardboard22.shapeColor = "red";

var cup = createSprite(395,375,20,50);
cup.shapeColor = "purple";

}

function draw() {
  background(0);
  
  if(gameState===1){

    background(0);
    createEdgeSprites();
    player.bounceOff(edges);

    if (keyWentDown(UP_ARROW)) {
      player.velocityX=0;
      player.velocityY=-4;
     }

     if(keyWentUp(UP_ARROW)){
      player.velocityX=0;
      player.velocityY=0;
      }
     
     if (keyWentDown(DOWN_ARROW)) {
       player.velocityX=0;
       player.velocityY=4;
     }

     if(keyWentUp(DOWN_ARROW)){
      player.velocityX=0;
      player.velocityY=0;
      }     
     
     if (keyWentDown(RIGHT_ARROW)) {
      player.velocityX=2;
      player.velocityY=0;
     }

     if(keyWentUp(RIGHT_ARROW)){
      player.velocityX=0;
      player.velocityY=0;
       
     }
          
     if (keyWentDown(LEFT_ARROW)) {
      player.velocityX=-2;
      player.velocityY=0;
     }

     if(keyWentUp(LEFT_ARROW)){
      player.velocityX=0;
      player.velocityY=0;  
     }
     
     player.bounceOff(cardboard1);
     player.bounceOff(cardboard2);
     player.bounceOff(cardboard3);
     player.bounceOff(cardboard4);
     player.bounceOff(cardboard5);
     player.bounceOff(cardboard6);
     player.bounceOff(cardboard7);
     player.bounceOff(cardboard8);
     player.bounceOff(cardboard9);
     player.bounceOff(cardboard10);
     player.bounceOff(cardboard11);
     player.bounceOff(cardboard12);
     player.bounceOff(cardboard13);
     player.bounceOff(cardboard14);
     player.bounceOff(cardboard15);
     player.bounceOff(cardboard16);
     player.bounceOff(cardboard17);
     player.bounceOff(cardboard18);
     player.bounceOff(cardboard19);
     player.bounceOff(cardboard20);
     player.bounceOff(cardboard21);
     player.bounceOff(cardboard22);
     
     if (player.isTouching(cup)) {
      player.velocityX=0;
      player.velocityY=0;
      textSize(35);

      text("You Win",140,210);
      gameState = 2
}
}

  if(gameState === 2){

  if(keyDown("up")){
    console.log("Vedansh");
    boy.changeAnimation(boy1Img);

}
}
drawSprites();


}

 