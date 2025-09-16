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

// function getHumanChoice() {
//     var choice2 = prompt("Choose rock, paper, or scissors!");
//     choice2 = choice2.toLowerCase();
//     console.log(`I choose ${choice2}!`);
//     humanSelection = choice2;
// }

const rockButton = document.querySelector("#rock");rockButton.addEventListener("click", () => {
    humanSelection = "rock";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
    humanSelection = "paper";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
    humanSelection = "scissors";
    getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const finalResults = document.querySelector("div");
const computerChoiceResult = document.createElement("p");
const resultPara = document.createElement("p");
computerChoiceResult.textContent = `The computer has chosen ${computerSelection}.`
finalResults.appendChild(computerChoiceResult);
finalResults.appendChild(resultPara);


function playRound (humanChoice, computerChoice) {
    let result = "";
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            resultPara.textContent = "You lose! Paper beats rock!";
            finalResults.appendChild(resultPara);
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!";
            finalResults.appendChild(resultPara);
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Rock beats scissors!";
            finalResults.appendChild(resultPara);
            humanScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            resultPara.textContent = "You lose! Scissors beats paper!"
            finalResults.appendChild(resultPara);
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!"
            finalResults.appendChild(resultPara);
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Paper beats rock!"
            finalResults.appendChild(resultPara);
            humanScore++;
        }
    }
    else {
        if (computerChoice == "rock") {
            resultPara.textContent = "You lose! Rock beats scissors!"
            finalResults.appendChild(resultPara);
            computerScore++;
        }
        else if (computerChoice == humanChoice) {
            resultPara.textContent = "It's a draw!"
            finalResults.appendChild(resultPara);
            drawScore++;
        }
        else {
            resultPara.textContent = "You win! Scissors beats paper!"
            finalResults.appendChild(resultPara);
            humanScore++;
        }
    }
    return result;
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