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
    let message = `The computer has chosen ${computerSelection}.`;
    console.log(message);
    computerSelection = choice1;
    return computerSelection;
}

const rockButton = document.querySelector("#rock");
const rockClick = () => {
    humanSelection = "rock";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayCurrentScore();
}
rockButton.addEventListener("click", rockClick);

const paperButton = document.querySelector(".paper");
const paperClick = () => {
    humanSelection = "paper";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayCurrentScore();
}
paperButton.addEventListener("click", paperClick);

const scissorsButton = document.querySelector(".scissors");
const scissorsClick = () => {
    humanSelection = "scissors";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayCurrentScore();
}
scissorsButton.addEventListener("click", scissorsClick);

const finalResults = document.querySelector("div");
const computerChoiceResult = document.createElement("p");
const resultPara = document.createElement("p");
const currentScore = document.createElement("p");
finalResults.appendChild(computerChoiceResult);
finalResults.appendChild(resultPara);
finalResults.appendChild(currentScore);

function playRound (humanChoice, computerChoice) {
    let result = "";
    computerChoiceResult.textContent = `The computer has chosen ${computerSelection}.`

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            resultPara.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!";
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Rock beats scissors!";
            humanScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            resultPara.textContent = "You lose! Scissors beats paper!"
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!"
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Paper beats rock!"
            humanScore++;
        }
    }
    else {
        if (computerChoice == "rock") {
            resultPara.textContent = "You lose! Rock beats scissors!"
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!"
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Scissors beats paper!"
            humanScore++;
        }
    }
    if (computerScore == 5 || humanScore == 5) {
    endGame();
    }
    return result;
}

function displayCurrentScore() {
    currentScore.textContent = `The current score is: Computer: ${computerScore} User: ${humanScore} Draws: ${drawScore}.`
}

function endGame() {
    const endMessage = document.createElement("p");
    if (computerScore == 5) {
    endMessage.textContent = `Game over! The computer wins!`
    }
    else if (humanScore == 5) {
        endMessage.textContent = `Congratulations! You won!`
    }
    finalResults.appendChild(endMessage);
    scissorsButton.removeEventListener("click", scissorsClick);
    paperButton.removeEventListener("click", paperClick);
    rockButton.removeEventListener("click", rockClick);
}