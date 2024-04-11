function getComputerChoice() {
    let computerChoiceNumber = random(3);
    if ( computerChoiceNumber === 0 ) {
        return "rock"
    }
    if ( computerChoiceNumber === 1 ) {
        return "paper"
    }
    if ( computerChoiceNumber === 2 ) {
        return "scissors"
    }
}

function random(number) {
    return Math.floor(Math.random() * number);
    
}

function playRound(playerSelection, computerSelection) {
    if ( playerSelection === "rock" && computerSelection === "paper" ) {
        return "You Lose! Paper beats Rock"
    }
    if ( ( playerSelection === "rock" ) && ( computerSelection === "scissors" ) ) {
        return "You Win! Rock beats Scissors"
    }
    if ( playerSelection === computerSelection ) {
        return "Tie!"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "scissors" ) ) {
        return "You Lose! Scissors beats Paper"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "rock" ) ) {
        return "You Win! Paper beats Rock"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "paper" ) ) {
        return "You Win! Scissors beats Paper"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "rock" ) ) {
        return "You Lose! Rock beats Scissors"
    }

}

function playGame() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("You picked: " + playerSelection);
    console.log("CPU picked: " + computerSelection)
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    playGame();
}
// const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
// const computerSelection = getComputerChoice();


