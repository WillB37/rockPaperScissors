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

// Plays a single round

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  if (computerChoice === humanChoice) {
    return ["tie", humanScore, computerScore];
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return ["computer", humanScore, computerScore];
  } else {
    humanScore++;
    return ["human", humanScore, computerScore];
  }
}

function updateResults(
  humanChoice,
  computerChoice,
  winner,
  humanScore,
  computerScore,
  round
) {
  const results = document.querySelector("#results");
  const content = document.createElement("p");

  results.textContent = "";

  if (round === 5) {
    if (computerScore > humanScore) {
      results.textContent = "Computer wins 5 rounds. ";
    } else if (humanScore > computerScore) {
      results.textContent = "You win 5 rounds! ";
    } else {
      results.textContent = "I guess you tied after 5 rounds. ";
    }
  }

  switch (winner) {
    case "tie":
      content.textContent = `Tie! Computer's ${computerChoice} equals your ${humanChoice}.`;
      results.textContent += `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
      break;
    case "human":
      content.textContent = `You Win! Your ${humanChoice} beats Computer's ${computerChoice}.`;
      results.textContent += `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
      break;
    case "computer":
      content.textContent = `You Lose! Computer's ${computerChoice} beats your ${humanChoice}.`;
      results.textContent += `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
      break;
  }

  results.appendChild(content);

  if (round === 5) {
    round = 0;
    humanScore = 0;
    computerScore = 0;
  }

  return [humanScore, computerScore, round];
}

let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";
let round = 0;
let winner = "";

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  [winner, humanScore, computerScore] = playRound(
    humanChoice,
    computerChoice,
    humanScore,
    computerScore
  );
  round++;
  [humanScore, computerScore, round] = updateResults(
    humanChoice,
    computerChoice,
    winner,
    humanScore,
    computerScore,
    round
  );
});
paperButton.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  [winner, humanScore, computerScore] = playRound(
    humanChoice,
    computerChoice,
    humanScore,
    computerScore
  );
  round++;
  [humanScore, computerScore, round] = updateResults(
    humanChoice,
    computerChoice,
    winner,
    humanScore,
    computerScore,
    round
  );
});
scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  [winner, humanScore, computerScore] = playRound(
    humanChoice,
    computerChoice,
    humanScore,
    computerScore
  );
  round++;
  [humanScore, computerScore, round] = updateResults(
    humanChoice,
    computerChoice,
    winner,
    humanScore,
    computerScore,
    round
  );
});
