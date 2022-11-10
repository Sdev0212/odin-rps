let computerChoice = "";

function getComputerChoice() {
    let rndNumber = Math.floor(Math.random()*3); //generates a random integer from 0 to 2 (0, 1 or 2)
    switch(rndNumber) {                          //changes the random integer into a string
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Scissors";
            break;
        case 2:
            computerChoice = "Paper";
    }
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    
}

console.log(getComputerChoice())