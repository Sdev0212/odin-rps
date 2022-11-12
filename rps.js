let computerChoice = "";

let playerPoints = 0;

let computerPoints = 0;

let roundNumber = 0;

let playerChoice;

let result;

let action;

let winner;

const player = document.querySelector("#playerScore");
player.textContent = `Player Score: ${playerPoints}`;

const computer = document.querySelector("#computerScore");
computer.textContent = `Computer Score: ${computerPoints}`;

const gameText = document.querySelector("#gameText");
gameText.textContent = "Welcome to the game, pick rock paper or scissors:"


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

//get player choice function

const choices = document.querySelectorAll('button');

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        playerChoice = choice.id;
        computerChoice = getComputerChoice();
        playGame();
    })
})


function playRound() {
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
        action = "Scissors beats paper";
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
    }
    console.log(result, action);
    return winner;
}

function playGame() {
    playRound();
    if(winner == "player"){
        playerPoints++;
        roundNumber++;
    }else if(winner == "computer"){
        computerPoints++;
        roundNumber++;
    } else roundNumber++;
    
    player.textContent = `Player Score: ${playerPoints}`;
    computer.textContent = `Computer Score: ${computerPoints}`;
    gameText.textContent = `${result} ${action} Round ${roundNumber}`;
}
