

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


const container = document.getElementsByClassName("container")[0];

let playerScore = 0;
let compScore = 0;
let leader = 0;

const startBtn = document.getElementById("start");
const gameContainer = document.getElementById("game-container");


const orangeBtn = document.createElement('button');
orangeBtn.textContent = "Orange";
const yellowBtn = document.createElement('button');
yellowBtn.textContent = "Yellow";
const blueBtn = document.createElement('button');
blueBtn.textContent = "Blue";

const score = document.createElement('div');
score.textContent = "0 -- 0";


startBtn.addEventListener("click", function() {
    startBtn.remove();
    gameContainer.appendChild(orangeBtn);
    gameContainer.appendChild(yellowBtn);
    gameContainer.appendChild(blueBtn);
    gameContainer.appendChild(score);

});

// Create the coloured lizard image elements
const orangeLizardPlayer = document.createElement("img");
orangeLizardPlayer.classList.add("player-lizard-gif");
const yellowLizardPlayer = document.createElement("img");
yellowLizardPlayer.classList.add("player-lizard-gif");
const blueLizardPlayer = document.createElement("img");
blueLizardPlayer.classList.add("player-lizard-gif");

const orangeLizardComp = document.createElement("img");
orangeLizardComp.classList.add("comp-lizard-gif");
const yellowLizardComp = document.createElement("img");
yellowLizardComp.classList.add("comp-lizard-gif");
const blueLizardComp = document.createElement("img");
blueLizardComp.classList.add("comp-lizard-gif");

// Button click functions
orangeBtn.addEventListener("click", function() {
    orangeLizardPlayer.src = "";
    orangeLizardPlayer.src = "images/lizard1_orange.gif";
    container.appendChild(orangeLizardPlayer);
    roundResult = playRound("o", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;
    game();
});
yellowBtn.addEventListener("click", function() {
    yellowLizardPlayer.src = "";
    yellowLizardPlayer.src = "images/lizard1_yellow.gif";
    container.appendChild(yellowLizardPlayer);
    roundResult = playRound("y", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;
    game();
});
blueBtn.addEventListener("click", function() {
    blueLizardPlayer.src = "";
    blueLizardPlayer.src = "images/lizard1_blue.gif";
    container.appendChild(blueLizardPlayer);
    roundResult = playRound("b", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " -- " + compScore;

    game();
});

function getCompChoice() {
    // get a random num between 1 and 3
    let num = Math.floor(Math.random() * (4 - 1) + 1);

    if (num == 1){
        orangeLizardComp.src = "";
        orangeLizardComp.src = "images/lizard2_orange.gif";
        container.appendChild(orangeLizardComp);
        return "o";
    } else if (num ==2) {
        yellowLizardComp.src = "";
        yellowLizardComp.src = "images/lizard2_yellow.gif";
        container.appendChild(yellowLizardComp);
        return "y";
    } else {
        blueLizardComp.src = "";
        blueLizardComp.src = "images/lizard2_blue.gif";
        container.appendChild(blueLizardComp);
        return "b";
    }
}

const output = document.createElement('div');

function playRound(playerSelect, compSelect) {

    if (playerSelect == compSelect){
        output.remove();
        output.textContent = "TIE";
        gameContainer.appendChild(output);
        return;
    }

    if (playerSelect == "o") {
        
        if (compSelect == "y") {

            output.remove();
            output.textContent = "You Lose! yellow beats orange";
            gameContainer.appendChild(output);
            return 0;

        } else { //compSelect == "b" 
            output.remove();
            output.textContent = "You Win! orange beats blue";
            gameContainer.appendChild(output);
            return 1;
        }
    
    } else if (playerSelect == "y") {

        if (compSelect == "b") {
            output.remove();
            output.textContent = "You Lose! blue beats yellow";
            gameContainer.appendChild(output);
            return 0;
        } else { //compSelect == "o" 
            output.remove();
            output.textContent = "You Win! yellow beats orange";
            gameContainer.appendChild(output);
            return 1;
        }
    } else if (playerSelect == "b") { 

        if (compSelect == "o") {
            output.remove();
            output.textContent = "You Lose! orange beats blue";
            gameContainer.appendChild(output);
            return 0;
        } else { //compSelect == "y" 
            output.remove();
            output.textContent = "You Win! blue beats yellow";
            gameContainer.appendChild(output);
            return 1;
        }
    }
}

function scoreKeep(roundResult) {

    if (roundResult == 1){
        playerScore++;
    } else if (roundResult == 0){
        compScore++;
    }
}

const endMessage = document.createElement('div');
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again";


function game() {
    let leader = Math.max(playerScore, compScore);

    if (leader == 3){
        if (playerScore == 3){
            endMessage.textContent = "NICE! You won!";
            gameContainer.appendChild(endMessage);
            gameContainer.appendChild(playAgainBtn);
        } else if (compScore == 3) {
            endMessage.textContent = "OOPs! You lost!";
            gameContainer.appendChild(endMessage);
            gameContainer.appendChild(playAgainBtn);
        }

        orangeBtn.disabled = true;
        yellowBtn.disabled = true;
        blueBtn.disabled = true;
    }
}

playAgainBtn.addEventListener("click", function() {
    output.remove();
    endMessage.remove();
    playAgainBtn.remove();
    orangeBtn.disabled = false;
    yellowBtn.disabled = false;
    blueBtn.disabled = false;
    orangeLizardComp.remove();
    yellowLizardComp.remove();
    blueLizardComp.remove();
    orangeLizardPlayer.remove();
    yellowLizardPlayer.remove();
    blueLizardPlayer.remove();


    playerScore = 0;
    compScore = 0;
    score.textContent = playerScore + " -- " + compScore;

});
