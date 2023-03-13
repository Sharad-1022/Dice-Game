var player1Score = 0;
var player2Score = 0;
var turnCounter1 = 0;
var turnCounter2 = 0;
const player1RollBtn = document.getElementById("player-roll");
const player1Dice = document.getElementById("player1-dice");
const player2RollBtn = document.getElementById("player-roll");
const player2Dice = document.getElementById("player2-dice");
const message = document.getElementById("message");

player1RollBtn.addEventListener("click", rollDiceForPlayer1);
player2RollBtn.addEventListener("click", rollDiceForPlayer2);

function rollDiceForPlayer1() {
  if (turnCounter1 < 5) {
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  player1Dice.src =  randomNum1 + ".png";
  turnCounter1++;
  player1Score += randomNum1;
  document.getElementById("player1-score").innerHTML = player1Score;
  if (turnCounter1 == 5) {
  player1RollBtn.disabled = true;
  player2RollBtn.disabled = true;
  if (player1Score > player2Score) {
     message.innerHTML = "Player 1 Wins!";
  } else if (player2Score > player1Score) {
     message.innerHTML = "Player 2 Wins!";
  } else {
    message.innerHTML = "It's a Tie!";
  }
 } 
 }
}
function rollDiceForPlayer2() {
if (turnCounter2 < 5) {
 var randomNum2 = Math.floor(Math.random() * 6) + 1;
 player2Dice.src = randomNum2 + ".png";
 turnCounter2++;
 player2Score += randomNum2;
 document.getElementById("player2-score").innerHTML = player2Score;
  if (turnCounter2 == 5) {
    player1RollBtn.disabled = true;
    player2RollBtn.disabled = true;
  if (player1Score > player2Score) {
    message.innerHTML = "Player 1 Wins!";
   } else if (player2Score > player1Score) {
   message.innerHTML = "Player 2 Wins!";
   } else {
   message.innerHTML = "It's a Tie!";
   }
  }
 }
}


