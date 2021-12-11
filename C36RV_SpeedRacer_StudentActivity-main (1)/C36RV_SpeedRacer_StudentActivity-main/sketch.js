var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount
var gameState
var car1img,car2img,trackimg
var car1,car2,cars
var allPlayers
var fuelimg
var goldimg
var obstacle1Image
var obstacle2Image
var fuels,goldCoins,obstacals
function preload() {
  backgroundImage = loadImage("./assets/background.png");
car1img=loadImage("./assets/car1.png")
car2img=loadImage("./assets/car2.png")
trackimg=loadImage("./assets/track.jpg")
fuelimg=loadImage("./assets/fuel.png")
goldimg=loadImage("./assets/goldCoin.png")
obstacle1Image=loadImage("./assets/obstacle1.png")
obstacle2Image=loadImage("./assets/obstacle2.png")
lifeImage=loadImage("./assets/life.png")
}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount===2) {
    game.update(1)
  }
  if (gameState===1) {
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
