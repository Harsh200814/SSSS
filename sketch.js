var back,jerry,jerryshouting,jerryimg,jerryimg2,tom,tomimg,
tomrunning,tomimg2;
function preload() {
  back=loadImage("garden.png");
  jerryimg=loadAnimation("jerryOne.png");
  jerryimg2=loadAnimation("jerryFour.png");
  jerryshouting=loadAnimation("jerryTwo.png","jerryThree.png");
  tomimg=loadAnimation("tomOne.png");
  tomrunning=loadAnimation("tomTwo.png","tomThree.png")
  tomimg2=loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(600,600);
    back=createSprite(300,300,600,600);
    jerry=createSprite(100,450,10,10)
    jerry.addAnimation(jerryimg);
    tom=createSprite(100,450,10,10)
    tom.addAnimation("Sitting",tomimg);
}


function draw() {

    background(0);
    if(keyDown("leftarrow")){
    tom.velocityX=-3
    tom.changeAnimation("Running",tomrunning);
    jerry.changeAnimation("Teasing",jerryshouting);}
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    keyPressed();
    }

    drawSprites();
}


function keyPressed(){

  tom.addAnimation("LastImage",tomimg2);
  tom.changeAnimation("LastImage");
  jerry.changeAnimation("JLastImage",jerryimg2);

}
