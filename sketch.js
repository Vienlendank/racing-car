var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState
var car1 , car2, track
var carImg1, carImg2, trackImg
var coinImg, fuelImg, obstacle1Img, obstacle2Img
var golds, fuels, obstacles
var cars, allPlayers=[]
var heart, heartImg, blastImg

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  carImg1=loadImage("assets/car1.png")
  carImg2=loadImage("assets/car2.png")
  trackImg=loadImage("assets/track.jpg")
  coinImg=loadImage("assets/goldCoin.png")
  fuelImg=loadImage("assets/fuel.png")
  obstacle1Img=loadImage("assets/obstacle1.png")
  obstacle2Img=loadImage("assets/obstacle2.png")
  heartImg=loadImage("assets/heart.png")
  blastImg=loadImage("assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  console.log(database)
 game = new Game();
 game.getState()
 game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.updateState(1)
  }
  if(gameState==1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
