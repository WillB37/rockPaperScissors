// Write function called getComputerChoice
// It will return, at random, "rock" "paper" "scissors"

function getComputerChoice() {
  let choice = Math.random();

  if ( choice <= 1/3 ) {
    return("rock");
  } else if ( choice > 1/3 && choice <= 2/3 ) {
    return("paper");
  } else {
    return ("scissors");
  }
}

console.log(getComputerChoice());

// Write function called getHumanChoice
// User picks between "rock" "paper" "scissors"
// No need to handle invalid choices
//
// "humanScore" and "computerScore" will keep track of scores
//
// Write function call playRound
// Plays a single round
// Stores choices in "humanChoice" and "computerChoice"
// "humanChoice" is case-insensitive
// outputs to console.log
// increments scores
//
// Write playGame function
// Plays 5 rounds
