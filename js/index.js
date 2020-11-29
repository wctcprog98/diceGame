let player1Score = 0;
let player2Score = 0;
let player1Turn = true; 
let currentPlayer = document.getElementById("currentPlayer"); 

//store values from DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const playerScoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

//random number
 //the + 1 makes it so its not 0.

//click event listener
rollBtn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * 6) + 1
    
    if(player1Turn){
        console.log("Player 1 rolled a " + random)
        player1Dice.textContent = random;
        currentPlayer.textContent = "It's Player 2's turn";
    }
    else{
        console.log("Player 2 rolled a " + random)
        player2Dice.textContent = random;
        currentPlayer.textContent = "It's Player 1's turn";
    }
    player1Turn = !player1Turn
})
  
     // 1. Find out which players turn it is
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player


