function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)) {
        case 0:
        return 'rock'
        break;
        case 1:
        return 'paper'
        break;
        case 2:
        return 'scissors'
        break;
    }
}

function playRound(playerSelection, computerSelection){
if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Tie"
} else if (playerSelection.toLowerCase() == "rock"){
    if (computerSelection.toLowerCase() == "paper") {
        return "You lose! Paper beats rock."
    }
    return "You win! Rock beats Scissors."
}
}

const playerSelection = "ROCk";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));