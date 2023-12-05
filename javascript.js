
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

    playerSelect = playerSelect.toLowerCase();
    playerSelect = playerSelect.replace(playerSelect[0], playerSelect[0].toUpperCase());

    if (playerSelect == compSelect){
        playerChoice = prompt("TIE, try again! Type your move: ");
        playRound(playerChoice,  getCompChoice());


    } else if (playerSelect == "Rock") {
        
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

    } else {
        playerChoice = prompt("Not valid, try again: ");
        playRound(playerChoice,  getCompChoice());
    }


}

function game() {

    let leader = 0;
    let player = 0;
    let comp = 0;

    while (leader < 3) {

        let playerChoice = prompt("Rock...Paper...Scissors! Type your move: ");
        let result = playRound(playerChoice,  getCompChoice());

        if (result == 0){
            comp++;
        } else {
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




