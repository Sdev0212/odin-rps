let computerChoice = "";

let result;

let action;

let winner;

function getComputerChoice() {
    let rndNumber = Math.floor(Math.random()*3); //generates a random integer from 0 to 2 (0, 1 or 2)
    switch(rndNumber) {                          //changes the random integer into a string
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
    }
    return computerChoice
}


function playRound() {
    let playerChoiceRaw = prompt("please type rock paper or scissors");
    if(playerChoiceRaw==null){
        playerChoiceRaw = "invalid"; //removes unexpected null
    }
    let playerChoice = playerChoiceRaw.toLowerCase(); //makes input case insensitive
    let computerChoice = getComputerChoice();

    if(playerChoice == computerChoice) {
        result = "Draw!";
        action = "You picked the same option";
        winner = "none";
    } else if(playerChoice=="rock"&&computerChoice=="scissors"){
        result = "You win!";
        action = "Rock beats Scissors";
        winner = "player";
    }  else if(playerChoice=="rock"&&computerChoice=="paper"){
        result = "You lose!";
        action = "Paper beats Rock";
        winner = "computer";
    } else if(playerChoice=="paper"&&computerChoice=="scissors"){
        result = "You lose!";
        action = "scissors beats paper";
        winner = "computer";
    } else if(playerChoice=="paper"&&computerChoice=="rock"){
        result = "You Win!";
        action = "Paper beats rock";
        winner = "player";
    } else if(playerChoice=="scissors"&&computerChoice=="rock"){
        result = "You lose!";
        action = "Rock beats scissors";
        winner = "computer";
    }  else if(playerChoice=="scissors"&&computerChoice=="paper"){
        result = "You Win!";
        action = "Scissors beats paper";
        winner = "player";
    } else {
        result = "You lose!";
        action = "Didn't pick a valid option";
        winner = "computer";
    }
    console.log(result, action);
    return [result, action, winner];
}

function game() {
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i < 5; i++) {
        let roundOutput = playRound();
        if(roundOutput[2]=="player"){
            playerPoints++;
        }
        else if(roundOutput[2]=="computer") {
            computerPoints ++;
        }
        console.log(`Round ${i+1}: Player ${playerPoints} - ${computerPoints} Computer`)
    }
    if(playerPoints>computerPoints) {
        outcome = "You're the winner";
    } else if(computerPoints>playerPoints) {
        outcome = "You lost this game";
    } else if(playerPoints == computerPoints) {
        outcome = "It's a tie this time";
    }
    console.log(`Final Score: Player ${playerPoints} - ${computerPoints} Computer`);
    return outcome;
}


console.log(game())
