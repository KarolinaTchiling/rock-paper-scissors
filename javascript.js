
// var playerScore = 0;
// var compScore = 0;
// var leader = 0;

// rockBtn.addEventListener("click", function() {
//     roundResult = playRound("Rock", getCompChoice());
//     scoreKeep(roundResult);
//     score.textContent = playerScore + " -- " + compScore;
//     game();
// });
// paperBtn.addEventListener("click", function() {
//     roundResult = playRound("Paper", getCompChoice());
//     scoreKeep(roundResult);
//     score.textContent = playerScore + " -- " + compScore;
//     game();
// });
// scissorsBtn.addEventListener("click", function() {
//     roundResult = playRound("Scissors", getCompChoice());
//     scoreKeep(roundResult);
//     score.textContent = playerScore + " -- " + compScore;
//     game();
// });

// const score = document.createElement('div');
// score.textContent = "0 -- 0";
// const results = document.getElementById('results');
// results.appendChild(score);
// score.style.display = "inline";

// const output = document.createElement('div');

// function getCompChoice() {
//     // get a random num between 1 and 3
//     let num = Math.floor(Math.random() * (4 - 1) + 1);

//     if (num == 1){
//         return "Rock";
//     } else if (num ==2) {
//         return "Paper";
//     } else {
//         return "Scissors";
//     }
// }


// function playRound(playerSelect, compSelect) {

//     if (playerSelect == compSelect){
//         output.remove();
//         output.textContent = "TIE";
//         results.appendChild(output);
//         return;
//     }

//     if (playerSelect == "Rock") {
        
//         if (compSelect == "Paper") {

//             output.remove();
//             output.textContent = "You Lose! Paper beats Rock";
//             results.appendChild(output);
//             return 0;

//         } else { //compSelect == "Scissors" 
//             output.remove();
//             output.textContent = "You Win! Rock beats Scissors";
//             results.appendChild(output);
//             return 1;
//         }
    
//     } else if (playerSelect == "Paper") {

//         if (compSelect == "Scissors") {
//             output.remove();
//             output.textContent = "You Lose! Scissors beats Paper";
//             results.appendChild(output);
//             return 0;
//         } else { //compSelect == "Rock" 
//             output.remove();
//             output.textContent = "You Win! Paper beats Rock";
//             results.appendChild(output);
//             return 1;
//         }


//     } else if (playerSelect == "Scissors") { 

//         if (compSelect == "Rock") {
//             output.remove();
//             output.textContent = "You Lose! Rock beats Scissors";
//             results.appendChild(output);
//             return 0;
//         } else { //compSelect == "Paper" 
//             output.remove();
//             output.textContent = "You Win! Scissors beats Paper";
//             results.appendChild(output);
//             return 1;
//         }
//     }

// }

// function scoreKeep(roundResult) {

//     if (roundResult == 1){
//         playerScore++;
//     } else if (roundResult == 0){
//         compScore++;
//     }
// }


// const endMess = document.getElementById('end-mess');
// const gameResult = document.createElement('h2');

// const playAgainBtn = document.createElement('button');
// playAgainBtn.textContent = "Play Again";

// playAgainBtn.addEventListener("click", function() {
//     gameResult.remove();
//     playAgainBtn.remove();
//     rockBtn.disabled = false;
//     paperBtn.disabled = false;
//     scissorsBtn.disabled = false;

//     playerScore = 0;
//     compScore = 0;
//     score.textContent = playerScore + " -- " + compScore;

// });

// function game() {
//     var leader = Math.max(playerScore, compScore);

//     if (leader == 3){
//         if (playerScore == 3){
//             gameResult.textContent = "NICE! You won!";
//             endMess.appendChild(gameResult);
//             endMess.appendChild(playAgainBtn);
//         } else if (compScore == 3) {
//             gameResult.textContent = "OOPS! You lost!";
//             endMess.appendChild(gameResult);
//             endMess.appendChild(playAgainBtn);
//         }

//         rockBtn.disabled = true;
//         paperBtn.disabled = true;
//         scissorsBtn.disabled = true;
//     }
// }

var startBtn = document.getElementById("start");
var gameContainer = document.getElementById("game-container");

const orangeBtn = document.createElement('button');
orangeBtn.textContent = "Orange";
const yellowBtn = document.createElement('button');
yellowBtn.textContent = "Yellow";
const blueBtn = document.createElement('button');
blueBtn.textContent = "Blue";

startBtn.addEventListener("click", function() {
    startBtn.remove();
    gameContainer.appendChild(orangeBtn);
    gameContainer.appendChild(yellowBtn);
    gameContainer.appendChild(blueBtn);
   
});


