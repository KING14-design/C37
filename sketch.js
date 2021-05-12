var database
var gameState=0
var playerCount=0
var form,player,game
var allPlayers
var car1,car2,cars
function preload(){
    bg=loadImage("Anime_car_bg.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight)
    database=firebase.database()
    game=new Game()
    game.getState()
game.start()
}
function draw(){
    background(bg)
    if(playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
}