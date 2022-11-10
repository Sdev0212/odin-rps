let computerChoice = "";

let result;

let action;

let winner;

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

function getPlayerChoice() {
    let playerChoiceRaw = prompt("please type rock paper or scissors");
    if(playerChoiceRaw==null){
        playerChoiceRaw = "invalid";
    }
    let playerChoice = playerChoiceRaw.toLowerCase();
    return playerChoice;
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if(playerChoice!="rock"&&playerChoice!="paper"&&playerChoice!="scissors") {
        result = "You lose!";
        action = "Didn't pick a valid option";
        winner = "computer";
        return [result, action, winner];
    } else if(playerChoice=="rock"&&computerChoice=="Scissors"){
        result = "You win!";
        action = "Rock beats Scissors";
        winner = "player";
        return [result, action, winner];
    } else if(playerChoice=="rock"&&computerChoice=="Rock"){
        result = "Draw!";
        action = "Same choice";
        winner = "player";
        return [result, action, winner];
    }  else if(playerChoice=="rock"&&computerChoice=="Paper"){
        result = "You lose!";
        action = "Paper beats Rock";
        winner = "player";
        return [result, action, winner];
    }
}

console.log(playRound())