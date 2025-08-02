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

// Get user's rps.
function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors!");
  return choice;
}

function playRound(userSelection, computerSelection) {
  let humanSelection = userSelection.toLowerCase();
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
  console.log(message);
}

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    ("A tie!");
  }
}

playGame();
