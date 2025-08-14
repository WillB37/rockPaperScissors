let humanScore = 0;
let computerScore = 0;

// It will return, at random, "rock" "paper" "scissors"

function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 1 / 3) {
    return "rock";
  } else if (choice > 1 / 3 && choice <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// User picks between "rock" "paper" "scissors"
// No need to handle invalid choices

function getHumanChoice() {
  return prompt("Enter Rock, Paper, or Scissors");
}

// Write function call playRound
// Plays a single round
// Stores choices in "humanChoice" and "computerChoice"
// "humanChoice" is case-insensitive
// outputs to console.log
// increments scores

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice().toLowerCase();

  if (computerChoice === humanChoice) {
    console.log(`Tie! ${computerChoice} equals ${humanChoice}.`);
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
}

playRound();
console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`);

// Write playGame function
// Plays 5 rounds
