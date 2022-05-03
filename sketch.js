var ball;
var db;
var form,player,game;
var position; //undefined
function setup(){
    db = firebase.database();
    //console.log(db);
    createCanvas(500,500);
}

function draw(){
    background("white");
     
    drawSprites();
    
}
function windowResize(){
    resizeCanvas(windowWidth,windowHeight)

}



/*
Objects required in the game:

    1. Form
        - input box
        - play button

    2. Player
        - Player's info:
            - player's name
            - rank
            - distance
            - score
        - Player count
    
    3. Game
        - Game states:
            - Start - Wait - 0
            - Play - 1
            - End - 2
        - Displaying all the components of the game
*/

