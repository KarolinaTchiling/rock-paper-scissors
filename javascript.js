
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

    if (playerSelect == "Rock") {
        
        if (compSelect == "Paper") {
            console.log("You Lose! Paper beats Rock");
            return 0;
        } else { //compSelect == "Scissors" 
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    
    } else if (playerSelect == "Paper") {

        if (compSelect == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            return 0;
        } else { //compSelect == "Rock" 
            console.log("You Win! Paper beats Rock");
            return 1;
        }


    } else if (playerSelect == "Scissors") { 

        if (compSelect == "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return 0;
        } else { //compSelect == "Paper" 
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
    }

}

function isValid(playerSelect) {

    if (playerSelect == "Rock" || playerSelect == "Paper" || playerSelect == "Scissors") {
        return playerSelect;
    }
    while (true) {
        playerSelect = prompt("Not valid, try again: ");
        playerSelect = playerSelect.toLowerCase();
        playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());

        if (playerSelect == "Rock" || playerSelect == "Paper" || playerSelect == "Scissors") {
            return playerSelect;
        }
    }
}

function noTie(playerSelect, compSelect) {

    if (playerSelect != compSelect){
        return playerSelect, compSelect;
    }
    while (true) {
        playerSelect = prompt("TIE, try again! Type your move: ");
        playerSelect = playerSelect.toLowerCase();
        playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());
        compSelect = getCompChoice();

        if (playerSelect != compSelect) {
            return playerSelect, compSelect;
        }
    }
}

function game() {

    let leader = 0;
    let player = 0;
    let comp = 0;

    while (leader < 3) {

        let playerSelect = prompt("Rock...Paper...Scissors! Type your move: ");
        playerSelect = playerSelect.toLowerCase();
        playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());

        validPlayer = isValid(playerSelect);
        validPlayer, validComp = noTie(validPlayer, getCompChoice());


        let result = playRound(validPlayer,  validComp);

        if (result == 0){
            comp++;
        } else if (result == 1){
            player++;
        }

        console.log(player + " - " + comp);


        leader = Math.max(comp, player);
    }

    console.log("GAME");

    if (comp > player) {
        console.log("You lose, sorry :(" );
    } else {
        console.log("You Win, congrats!");
    }
}


console.log(game());
