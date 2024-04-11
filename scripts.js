function getComputerChoice() {
    let computerChoiceNumber = random(3);
    let computerChoice = null;
    if ( computerChoiceNumber === 0 ) {
            return computerChoice = "Rock"
    }
    if ( computerChoiceNumber === 1 ) {
            return computerChoice = "Paper"
    }
    if ( computerChoiceNumber === 2 ) {
            return computerChoice = "Scissors"
    }
}

function random(number) {
    return Math.floor(Math.random() * number);
    
}

console.log(getComputerChoice());