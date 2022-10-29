// making working variables.



//getting computer to choose from 3 variables.

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

let computerSelection = getComputerChoice();
const playerInput = "RoCk";
const playerSelection = playerInput.toLowerCase();

// Export Winner 

function logWin() {
    let winner = playRound(playerSelection, computerSelection);
    if (winner == "Win") {
        return "Player Wins!"
    } else if (winner == "Lost") {
        return "Computer Wins!"
    } else return "Tiebreaker."

}


// function for 1 round.


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return "Tie";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Lost";
        }
        return "Win";
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "Lost";
        }
        return "Win";
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Lost";
        }
        return "Win";
    }
}


// 5 games loop.

function game() {
    let round = '';
    for (let i = 1; i < 6; i++) {
        computerSelection = getComputerChoice();
        playRound() 
        round = i;
        console.log("Round " + round);
        console.log("Computer selected " + computerSelection);
        console.log("You selected " + playerSelection);
        console.log(logWin());
    }
}

game();

