console.log("Hello, welcome to RPS!");

let RPS_Random;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let humanSelection;
let computerSelection;
function getComputerChoice() {
    let RPS_Random = Math.random() * 100;
    var choice1;
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
    computerSelection = choice1;
    return computerSelection;
}

function getHumanChoice() {
    var choice2 = prompt("Choose rock, paper, or scissors!");
    choice2 = choice2.toLowerCase();
    console.log(`I choose ${choice2}!`);
    humanSelection = choice2;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a draw!");
            drawScore++;
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
            drawScore++;
        }
        else {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
    }

    else if (humanChoice == undefined) {
        console.log("You didn't choose rock, paper, or scissors.");
    }

    else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            console.log("It's a draw!");
            drawScore++;
        }
        else {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let finalScoreMessage = `The final score is: You: ${humanScore}, Computer: ${computerScore}, Draws: ${drawScore}.`
    console.log(finalScoreMessage);
}