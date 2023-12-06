
var playerScore = 0;
var compScore = 0;

const output = document.createElement('div');


function getCompChoice() {
    // get a random num between 1 and 3
    let num = Math.floor(Math.random() * (4 - 1) + 1);

    if (num == 1){
        return "Rock";
    } else if (num ==2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelect, compSelect) {

    if (playerSelect == compSelect){
        output.remove();
        output.textContent = "TIE";
        results.appendChild(output);
        return;
    }

    if (playerSelect == "Rock") {
        
        if (compSelect == "Paper") {

            output.remove();
            output.textContent = "You Lose! Paper beats Rock";
            results.appendChild(output);
            return 0;

        } else { //compSelect == "Scissors" 
            output.remove();
            output.textContent = "You Win! Rock beats Scissors";
            results.appendChild(output);
            return 1;
        }
    
    } else if (playerSelect == "Paper") {

        if (compSelect == "Scissors") {
            output.remove();
            output.textContent = "You Lose! Scissors beats Paper";
            results.appendChild(output);
            return 0;
        } else { //compSelect == "Rock" 
            output.remove();
            output.textContent = "You Win! Paper beats Rock";
            results.appendChild(output);
            return 1;
        }


    } else if (playerSelect == "Scissors") { 

        if (compSelect == "Rock") {
            output.remove();
            output.textContent = "You Lose! Rock beats Scissors";
            results.appendChild(output);
            return 0;
        } else { //compSelect == "Paper" 
            output.remove();
            output.textContent = "You Win! Scissors beats Paper";
            results.appendChild(output);
            return 1;
        }
    }

}


// function noTie(playerSelect, compSelect) {

//     if (playerSelect != compSelect){
//         return playerSelect, compSelect;
//     }
//     while (true) {
//         playerSelect = prompt("TIE, try again! Type your move: ");
//         playerSelect = playerSelect.toLowerCase();
//         playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());
//         compSelect = getCompChoice();

//         if (playerSelect != compSelect) {
//             return playerSelect, compSelect;
//         }
//     }
// }

const score = document.createElement('div');
score.textContent = "0 -- 0";
const results = document.getElementById('results');
results.appendChild(score);
score.style.display = "inline";

var rockBtn = document.getElementById("Rock");
var paperBtn = document.getElementById("Paper");
var scissorsBtn = document.getElementById("Scissors");

rockBtn.addEventListener("click", function() {
    roundResult = playRound("Rock", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;
});
paperBtn.addEventListener("click", function() {
    roundResult = playRound("Paper", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;
});
scissorsBtn.addEventListener("click", function() {
    roundResult = playRound("Scissors", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;
});

function scoreKeep(roundResult) {

    if (roundResult == 1){
        playerScore++;
    } else if (roundResult == 0){
        compScore++;
    }
}




// function game() {

//     let leader = 0;
//     let player = 0;
//     let comp = 0;

//     while (leader < 3) {

//         let playerSelect = prompt("Rock...Paper...Scissors! Type your move: ");
//         playerSelect = playerSelect.toLowerCase();
//         playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());

//         validPlayer = isValid(playerSelect);
//         validPlayer, validComp = noTie(validPlayer, getCompChoice());


//         let result = playRound(validPlayer,  validComp);

//         if (result == 0){
//             comp++;
//         } else if (result == 1){
//             player++;
//         }

//         console.log(player + " - " + comp);


//         leader = Math.max(comp, player);
//     }

//     console.log("GAME");

//     if (comp > player) {
//         console.log("You lose, sorry :(" );
//     } else {
//         console.log("You Win, congrats!");
//     }
// } 

// function game() {
//     let playerSelect = prompt("Rock...Paper...Scissors! Type your move: ");
//         playerSelect = playerSelect.toLowerCase();
//         playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());

//         validPlayer = isValid(playerSelect);
//         validPlayer, validComp = noTie(validPlayer, getCompChoice());


//         let result = playRound(validPlayer,  validComp);
// }


//console.log(game());
