console.log("Hello, RPS!");

let RPS_Random;
let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function getComputerChoice() {
    let RPS_Random = Math.random() * 100;
    let choice1;
    if (RPS_Random <= 33) {
        choice1 = "rock";
    }
    else if(33 < RPS_Random && RPS_Random <= 66) {
        choice1 = "paper";
    }
    else {
        choice1 = "scissors";
    }
    let message = "The computer has chosen " + choice1 + "!";
    console.log(message);
    let computerSelection = choice1;
    return computerSelection;
}

function getHumanChoice() {
    let choice2 = prompt("Choose rock, paper, or scissors!");
    choice2 = choice2.toLowerCase();
    console.log(`I choose ${choice2}!`);
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a draw!");
        }
        else {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a draw!");
        }
        else {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
    }

    else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a draw!");
        }
        else {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
    }
}