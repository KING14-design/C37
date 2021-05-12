class Game{
    constructor()
    {}
    getState(){
        var gameref=database.ref("gameState")
        gameref.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerref=await database.ref("playerCount").once("value")
            if(playerref.exists()){
                playerCount=playerref.val()
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        cars=[car1,car2]
    }
    play(){
        form.hide()
        text("gameStart",100,100)
        Player.getplayerinfo()
        console.log(allPlayers)
        if(allPlayers!==undefined){
var index=0
var x=0
var y=0
            var position=130
            for(var plr in allPlayers){
                index=index+1
                x=x+400
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    fill("red")
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                text(allPlayers[plr].Name + ":"+allPlayers[plr].distance,100,position)
                position+=40
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance += 15
player.update()
        }
        drawSprites()
    }
}