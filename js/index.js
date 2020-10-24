

function rollDice(min, max) {
    let playScore = document.getElementsByClassName('playerScore');
    //clear div
    let score1 = playScore[0];
    let score2 = playScore[1];
    score1.style.display = 'none'; 
    score2.style.display = 'none'; 
    //generate rolled number
    let randomNum = Math.floor(Math.random() * 6) + 1;
    score1.textContent = randomNum; 
    score1.style.display = "block";  
}
  
document.getElementById('rollBtn').addEventListener("click", function () {
    rollDice();
    //update #rolled on dice
    
});
   



