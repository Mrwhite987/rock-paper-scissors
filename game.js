// console.log("Hello World");
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;

// Get computer's rps(short for rock paper scissors).
function getComputerChoice() {
  let num = Math.random();
  if (num <= 1 / 3) {
    return "rock";
  } else if (num <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanSelection) {
  let computerSelection = getComputerChoice();
  let message = "";
  if (humanSelection == computerSelection) {
    message = "A tie!";
  }
  if (humanSelection == "rock") {
    if (computerSelection == "paper") {
      message = `You lose! ${paper} beats ${rock}.`;
      computerScore += 1;
    } else if (computerSelection == "scissors") {
      message = `You win! ${rock} beats ${scissors}.`;
      humanScore += 1;
    }
  } else if (humanSelection == "paper") {
    if (computerSelection == "rock") {
      message = `You win! ${paper} beats ${rock}.`;
      humanScore += 1;
    } else if (computerSelection == "scissors") {
      message = `You lose! ${scissors} beats ${paper}.`;
      computerScore += 1;
    }
  } else {
    if (computerSelection == "rock") {
      message = `You lose! ${rock} beats ${scissors}.`;
      computerScore += 1;
    } else if (computerSelection == "paper") {
      message = `You win! ${scissors} beats ${paper}.`;
      humanScore += 1;
    }
  }
  // let buttonsDiv = document.querySelector("#button");

  consoleDiv.textContent = message;
  let resultMessage = `Your score: ${humanScore}\n Computer score: ${computerScore}`;
  resultDiv.textContent = resultMessage;
}

function checkWinner() {
  let winnerMessage = "";
  if (humanScore == 5 && computerScore < 5) {
    winnerMessage = "Winner is you!";
    winnerDiv.textContent = winnerMessage;
  }
  if (humanScore < 5 && computerScore == 5) {
    winnerMessage = "Winner is computer!";
    winnerDiv.textContent = winnerMessage;
  }
}

let buttonsDiv = document.querySelector("#button");
let consoleDiv = document.createElement("div");
let resultDiv = document.createElement("div");
let winnerDiv = document.createElement("div");
buttonsDiv.appendChild(consoleDiv);
buttonsDiv.appendChild(resultDiv);
buttonsDiv.appendChild(winnerDiv);

buttonsDiv.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      playRound("rock");
      checkWinner();
      break;
    case "paper":
      playRound("paper");
      checkWinner();
      break;
    case "scissors":
      playRound("scissors");
      checkWinner();
      break;
  }
});
