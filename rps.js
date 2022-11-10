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


function playRound() {
    let playerChoiceRaw = prompt("please type rock paper or scissors");
    if(playerChoiceRaw==null){
        playerChoiceRaw = "invalid";
    }
    let playerChoice = playerChoiceRaw.toLowerCase();
    let computerChoice = getComputerChoice();

    if(playerChoice!="rock"&&playerChoice!="paper"&&playerChoice!="scissors") {
        result = "You lose!";
        action = "Didn't pick a valid option";
        winner = "computer";
    } else if(playerChoice=="rock"&&computerChoice=="Scissors"){
        result = "You win!";
        action = "Rock beats Scissors";
        winner = "player";
    } else if(playerChoice=="rock"&&computerChoice=="Rock"){
        result = "Draw!";
        action = "Same choice";
        winner = "none";
    }  else if(playerChoice=="rock"&&computerChoice=="Paper"){
        result = "You lose!";
        action = "Paper beats Rock";
        winner = "computer";
    } else if(playerChoice=="paper"&&computerChoice=="Scissors"){
        result = "You lose!";
        action = "scissors beats paper";
        winner = "computer";
    } else if(playerChoice=="paper"&&computerChoice=="Rock"){
        result = "You Win!";
        action = "Paper beats rock";
        winner = "player";
    }  else if(playerChoice=="paper"&&computerChoice=="Paper"){
        result = "Draw!";
        action = "Same choice";
        winner = "none";
    } else if(playerChoice=="scissors"&&computerChoice=="Scissors"){
        result = "Draw!";
        action = "Same choice";
        winner = "none";
    } else if(playerChoice=="scissors"&&computerChoice=="Rock"){
        result = "You lose!";
        action = "Rock beats scissors";
        winner = "computer";
    }  else if(playerChoice=="scissors"&&computerChoice=="Paper"){
        result = "You Win!";
        action = "Scissors beats paper";
        winner = "player";
    }
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
        return [playerPoints, computerPoints];
    }
}


console.log(game())
