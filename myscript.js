//getting computer to choose from 3 variables.

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let computerSelection = getComputerChoice();
let playerInput = prompt("Are you feeling lucky?", "Rock , Papers, Scissors");
let playerSelection = playerInput.toLowerCase();
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Export Winner. score calculation.

function logWin() {
    
    let winner = playRound(playerSelection, computerSelection);
    if (winner == "Win") {
        playerScore++;
        return "Player Wins!"
    } else if (winner == "Lost") {
        computerScore++;
        return "Computer Wins!"
    } else 
    tieScore++;
    return "Tiebreaker."

}



// function for 1 round.


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "Lost";
        }
        return "Win";
    } else if (playerSelection === "paper") {
        if (computerSelection == "scissors") {
            return "Lost";
        }
        return "Win";
    } else if (playerScore === "scissors" ) {
        if (computerSelection == "rock") {
            return "Lost";
        }
        return "Win";
    } else 
    return "Please input a valid choice."
}

// 5 games loop.

function game() {
    let round = '';
    for (let i = 1; i < 6; i++) {
        computerSelection = getComputerChoice();
        
        round = i;
        playRound(); 
        console.log("Round " + round);
        console.log("Computer selected " + computerSelection);
        console.log("You selected " + playerSelection);
        console.log(logWin());
        console.log("Player " + playerScore)
        console.log("Computer " + computerScore)
        console.log("Tie " + tieScore)
        console.log("Total: " + "Player " + playerScore + ", Computer " + computerScore + ", Ties " + tieScore);
    }
}

game();

