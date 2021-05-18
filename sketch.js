var Bg;
var BgImg;
var gameName;
var gameNameImg;
var story;
var storyImg;
var Ninja;
var NinjaImg;
var rules;
var rulesImg;
var Start;
var StartImg;
var gameOver;
var gameState = "start";
var Bg1;
var Bg1Img;
var Bg2;
var Bg2Img;
var Ninja1;
var NinjaIdle;
var NinjaJump;
var NinjaRun;
var InvisibleGround;
var bool=false;

function preload(){
  BgImg = loadImage("images/Background(1st).jpeg");
  gameNameImg = loadImage("images/GameName.png");
  storyImg = loadImage("images/GameStory.png");
  rulesImg = loadImage("images/rules.png");
  NinjaImg = loadImage("images/NinjaImg.png");
  StartImg = loadImage("images/Start.png");
  Bg1Img = loadImage("images/Background2.png");
  NinjaRun = loadAnimation("images/Ninja11Run.png", "images/Ninja12Run.png", "images/Ninja13Run.png", "images/Ninja14Run.png", "images/Ninja15run.png", "images/Ninja16Run.png");
  NinjaIdle = loadAnimation("images/Ninja1Id.png", "images/Ninja2Id.png", "images/Ninja3Id.png", "images/Ninja4Id.png");
  NinjaJump = loadAnimation("images/Ninja20Jump.png", "images/Ninja21Jump.png", "images/Ninja22Jump.png", "images/Ninja23Jump.png", "images/Ninja24Jump.png", "images/Ninja25Jump.png", "images/Ninja26Jump.png", "images/Ninja27Jump.png" );

}


function setup() {
  createCanvas(displayWidth,displayHeight);

  Bg = createSprite( displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg.addImage(BgImg);
  Bg.scale = 1.6;

  gameName = createSprite(650,50,10,10);
  gameName.addImage(gameNameImg);

  story = createSprite(250,160,10,10);
  story.addImage(storyImg);

  rules = createSprite(280,360,10,10);
  rules.addImage(rulesImg);

  Ninja = createSprite(1085,328,10,10);
  Ninja.addImage(NinjaImg);
  Ninja.scale = 0.80;

  Start = createSprite(700,400,10,10);
  Start.addImage(StartImg);

  Bg1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Bg1.addImage(Bg1Img);
  Bg1.scale = 3;

  InvisibleGround = createSprite(displayWidth/2,displayHeight/2 +280,displayWidth,10);

   Ninja1 = createSprite(displayWidth/2-500, displayHeight/2+200, 10, 10);
  //  Ninja1.addAnimation("jump", NinjaJump);
   Ninja1.addAnimation("running", NinjaRun);
   
   Ninja1.scale = 2.5;
   
   


}

function draw() {

  if(gameState === "start"){
     Bg.visible = true;
     gameName.visible = true;
     story.visible = true;
     rules.visible = true;
     Ninja.visible = true;
     Start.visible = true;
     Bg1.visible = false;
     Ninja1.visible = false;
     InvisibleGround.visible = false;

     if(mousePressedOver(Start)){
       gameState = "play";
     }
  }
   if(gameState === "play"){
    Bg.visible = false;
    gameName.visible = false;
    story.visible = false;
    rules.visible = false;
    Ninja.visible = false;
    Start.visible = false;
    Bg1.visible = true;
    Bg1.velocityX = -5;
    Ninja1.visible = true;


    if(Bg1.x < 0){
       Bg1.x = Bg1.width/2;
    }

    if(keyDown("Space")){
      Ninja1.changeAnimation("jump", NinjaJump);
      Ninja1.velocityY = -10;
  }
  Ninja1.collide(InvisibleGround);
   Ninja1.velocityY = Ninja1.velocityY+0.5;
  //  Ninja1.changeAnimation("running", NinjaRun);
}

  drawSprites();
}
 