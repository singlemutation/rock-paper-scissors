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

const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");



function playRound(playerSelection, computerSelection) {
    if ( ( playerSelection === "rock" ) && ( computerSelection === "paper" ) ) {
        ++compScore;
        return "You Lose! Paper beats Rock"
    }
    if ( ( playerSelection === "rock" ) && ( computerSelection === "scissors" ) ) {
        ++playerScore;
        return "You Win! Rock beats Scissors"
    }
    if ( playerSelection === computerSelection ) {
        return "Tie!"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "scissors" ) ) {
        ++compScore;
        return "You Lose! Scissors beats Paper"
    }
    if ( ( playerSelection === "paper" ) && ( computerSelection === "rock" ) ) {
        ++playerScore;
        return "You Win! Paper beats Rock"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "paper" ) ) {
        ++playerScore;
        return "You Win! Scissors beats Paper"
    }
    if ( ( playerSelection === "scissors" ) && ( computerSelection === "rock" ) ) {
        ++compScore;
        return "You Lose! Rock beats Scissors"
    }

}

const container = document.querySelector("div");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    const playerChoice = document.createElement("div");
    playerChoice.textContent = "You chose: " + playerSelection;
    container.appendChild(playerChoice);
    computerSelection = getComputerChoice();
    const compChoice = document.createElement("div");
    compChoice.textContent = "Computer chose: " + computerSelection;
    container.appendChild(compChoice);
    playRound(playerSelection, computerSelection);
    const scoreKeeper = document.createElement("div");
    scoreKeeper.textContent = "You: " + playerScore + " CPU: " + compScore;
    container.appendChild(scoreKeeper);
    winner(compScore, playerScore);
  });
});

function winner(compScore, playerScore){
    if ( compScore === 5 ) {
        const compWin = document.createElement("div");
        compWin.textContent = "You lost the game!";
        compWin.style.color = 'red';
        container.appendChild(compWin);
    }
    if ( playerScore === 5 ) {
        const playWin = document.createElement("div");
        playWin.textContent = "You won the game!";
        playWin.style.color = 'green';
        container.appendChild(playWin);
    }
}

