function getComputerChoice() {
    let computerChoiceNumber = random(3);
    let computerSelection;
    if ( computerChoiceNumber === 0 ) {
            return computerChoice = "rock"
    }
    if ( computerChoiceNumber === 1 ) {
            return computerChoice = "paper"
    }
    if ( computerChoiceNumber === 2 ) {
            return computerChoice = "scissors"
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
    if ( ( playerSelection === "rock" ) && ( computerSelection === "rock" ) ) {
        return "Tie!"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "paper" ) ) {
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
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "scissors" ) ) {
        return "Tie!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


console.log("You picked: " + playerSelection);
console.log("CPU picked: " + computerSelection)
console.log(playRound(playerSelection, computerSelection));