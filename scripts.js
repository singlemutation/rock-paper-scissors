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
let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ( ( playerSelection === "rock" ) && ( computerSelection === "paper" ) ) {
        compScore++;
        return "You Lose! Paper beats Rock"
    }
    if ( ( playerSelection === "rock" ) && ( computerSelection === "scissors" ) ) {
        playerScore++;
        return "You Win! Rock beats Scissors"
    }
    if ( playerSelection === computerSelection ) {
        return "Tie!"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "scissors" ) ) {
        compScore++;
        return "You Lose! Scissors beats Paper"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "rock" ) ) {
        playerScore++;
        return "You Win! Paper beats Rock"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "paper" ) ) {
        playerScore++;
        return "You Win! Scissors beats Paper"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "rock" ) ) {
        compScore++;
        return "You Lose! Rock beats Scissors"
    }

}

function playGame() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log("You picked: " + playerSelection);
    console.log("CPU picked: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("You: " + playerScore + " CPU: " + compScore)
}

for (let i = 0; i < 5; i++) {
    playGame();
}


if ( compScore > playerScore ) {
    console.log("You lost the game!")
}
if ( compScore < playerScore ) {
    console.log("You won the game!")
}
else {
    console.log("You tied the computer!")
}



