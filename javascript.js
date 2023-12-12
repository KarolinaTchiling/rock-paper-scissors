

const container = document.getElementsByClassName("container")[0];

let playerScore = 0;
let compScore = 0;
let leader = 0;

const startBtn = document.getElementById("start");
const gameContainer = document.getElementById("game-container");
const gameContent = document.getElementById("game-content");

const moreBtn = document.getElementById("more-btn");

const backBtn = document.createElement('button');
backBtn.textContent = "Go Back";
const lizardText = document.createElement('div');


// More Info
moreBtn.addEventListener("click", function() {
    gameContent.remove();

    const oText = document.createElement('p');
    oText.classList.add("lizard-text");
    oText.textContent = "Orange-throated males are “ultra-dominant” and defend large territories. They  are the most aggressive morph and excel at stealing mates from the weaker blue-throated individuals. However, they are vulnerable to cuckoldy by the yellow-throated female mimics."
    lizardText.appendChild(oText);

    const bText = document.createElement('p');
    bText.classList.add("lizard-text");
    bText.textContent = "Blue-throated males are dominant and engage in intensive mate guarding. Due to their small territories and vigilance they excel at catching yellow-throated sneaks. However, they are susceptible to having their mates stolen by the larger, more aggressive orange-throated males."
    lizardText.appendChild(bText);

    const yText = document.createElement('p');
    yText.classList.add("lizard-text");
    yText.textContent = 'Yellow-throated males are “sneakers”. Their coloration is similar to that of sexually mature females, and they mimic female "rejection" displays when they encounter the other more dominant males. However, they are easily overpowered by the protective blue-throated males but excel at sneaking past the distracted orange-throated males.'
    lizardText.appendChild(yText);
    lizardText.appendChild(backBtn);
    gameContainer.appendChild(lizardText);
})

backBtn.addEventListener("click", function() {
    lizardText.remove();
    gameContainer.appendChild(gameContent);

})

const orangeBtn = document.createElement('button');
orangeBtn.classList.add("orange-btn","liz-btn");
const yellowBtn = document.createElement('button');
yellowBtn.classList.add("yellow-btn","liz-btn");
const blueBtn = document.createElement('button');
blueBtn.classList.add("blue-btn","liz-btn");



const ballImg = document.createElement("img");
ballImg.src = "images/balls.png";
ballImg.classList.add("ball-select");
const scoreBoard = document.createElement('div');
    scoreBoard.classList.add("score-board");
    const scoreHead = document.createElement('h2');
    scoreHead.textContent = "SCORE";
    scoreHead.classList.add("score-head");
    scoreBoard.appendChild(scoreHead);

    const scoreSub = document.createElement('h2');
    scoreSub.textContent = "YOU THEM";
    scoreSub.style.wordSpacing = '20px';
    scoreSub.classList.add("score");
    scoreBoard.appendChild(scoreSub);

    const score = document.createElement('h2');
    score.textContent = "0 0";
    score.style.wordSpacing = "40px";
    score.classList.add("score");
    scoreBoard.appendChild(score);

const morphText = document.createElement('h2');
morphText.textContent = "Select your morph:";
morphText.classList.add("morph-text");


startBtn.addEventListener("click", function() {
    startBtn.remove();
    gameContainer.remove();
    container.appendChild(ballImg);
    container.appendChild(scoreBoard);
    container.appendChild(morphText);

    container.appendChild(orangeBtn);
    container.appendChild(yellowBtn);
    container.appendChild(blueBtn);
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

const roundContainer = document.createElement('div');
roundContainer.classList.add("round-container");

// Button click functions
orangeBtn.addEventListener("click", function() {
    orangeLizardPlayer.src = "";
    orangeLizardPlayer.src = "images/lizard1_orange.gif";
    container.appendChild(orangeLizardPlayer);
    container.appendChild(roundContainer);

    roundResult = playRound("o", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " " + compScore;
    game();
    container.appendChild(orangeBtn); //gets lost behind the gif
});
yellowBtn.addEventListener("click", function() {
    yellowLizardPlayer.src = "";
    yellowLizardPlayer.src = "images/lizard1_yellow.gif";
    container.appendChild(yellowLizardPlayer);
    container.appendChild(roundContainer);

    roundResult = playRound("y", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " " + compScore;
    game();
    container.appendChild(orangeBtn); //gets lost behind the gif
});
blueBtn.addEventListener("click", function() {
    blueLizardPlayer.src = "";
    blueLizardPlayer.src = "images/lizard1_blue.gif";
    container.appendChild(blueLizardPlayer);
    container.appendChild(roundContainer);

    roundResult = playRound("b", getCompChoice());
    scoreKeep(roundResult);
    score.textContent = playerScore + " " + compScore;
    game();
    container.appendChild(orangeBtn); //gets lost behind the gif
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

const roundHead = document.createElement('h2');
const roundText = document.createElement('h3');
roundText.style.fontWeight = "normal";


function playRound(playerSelect, compSelect) {

    if (playerSelect == compSelect){
        roundHead.remove();
        roundText.remove();
        roundHead.textContent = "Tie!"
        roundText.textContent = "It appears you two are evenly matched. The female is not impressed and returns to her sunbathe.";
        roundContainer.appendChild(roundHead);
        roundContainer.appendChild(roundText);
        return;
    }

    if (playerSelect == "o") {
        
        if (compSelect == "y") {
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Yikes!"
            roundText.textContent = "You encounter a yellow sneak! You mistake him for an uninterested female. You leave to look for another female but behind your back, he runs off with your previous mate. Despite your ultra-dominate nature, you have just unknowingly become a cuckold.";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
            return 0;

        } else { //compSelect == "b" 
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Nice!"
            roundText.textContent = "You encounter a blue male! Despite his protective nature, he doesn't stand a chance against your sheer power and size. The female is impressed and chooses you.";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
            return 1;
        }
    
    } else if (playerSelect == "y") {

        if (compSelect == "b") {
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Oh No!"
            roundText.textContent = "You encounter a dominant blue male! You attempt to confuse him with your female-like coloring, but he sees through your tricks. You are left alone in the dust and looking like a fool.";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
            return 0;

        } else { //compSelect == "o" 
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Smooth!"
            roundText.textContent = "You encounter a large orange male! You trick him by mimicking a female rejection dance. You have lost his interest and take this opportunity to steal his mate.";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
            return 1;
        }
    } else if (playerSelect == "b") { 

        if (compSelect == "o") {
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Ouch!"
            roundText.textContent = "You encounter an aggressive orange male! He threatens to steal your mate. You are left with no choice but to fight. You give it your all but stand no chance against his size. Your mate is unimpressed with you and leaves with him. ";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
            return 0;
        } else { //compSelect == "y" 
            roundHead.remove();
            roundText.remove();
            roundHead.textContent = "Impressive!"
            roundText.textContent = "You encounter a yellow sneak!  However, your vigilance and size overpowers his deceitful attempt. The sneak is left running for the hills. You and your mate return to your den.";
            roundContainer.appendChild(roundHead);
            roundContainer.appendChild(roundText);
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
