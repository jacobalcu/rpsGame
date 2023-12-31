let getComputerChoice = () => {
  let numChoice = Math.floor(Math.random() * 3);
  let choice = numChoice == 0 ? "rock" : numChoice == 1 ? "paper" : "scissors";
  return choice;
};

let updateScores = (player, computer) => {
  let playerScore = document.getElementById("playerScore");
  let computerScore = document.getElementById("compScore");
  playerScore.textContent = `Player: ${player}`;
  computerScore.textContent = `Computer: ${computer}`;
};

let resetFunc = () => {
  playerScore = 0;
  compScore = 0;
  totalGames = 0;
  round = 0;
  //   updateScores(0, 0);
};

let playRound = (playerSelection, computerSelection) => {
  let retMessage;
  // 0 = tie, 1 = computer, 2 = player
  let winner;
  if (playerSelection == computerSelection) {
    retMessage = "You tied!";
    winner = 0;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    retMessage = "You Lose! Paper beats Rock";
    winner = 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    retMessage = "You Win! Rock beats Scissors";
    winner = 2;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    retMessage = "You Win! Paper beats Rock";
    winner = 2;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    retMessage = "You Lose! Scissors beats Paper";
    winner = 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    retMessage = "You Win! Scissors beats Paper";
    winner = 2;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    retMessage = "You Lose! Rock beats Scissors";
    winner = 1;
  }
  let showMess = document.getElementById("resultText");
  showMess.textContent = retMessage;
  return winner;
};

let gameOver = (playerScore, compScore) => {
  if (playerScore == 5) {
    let showMess = document.getElementById("resultText");
    showMess.textContent = "You win!";
    return 1;
  } else if (compScore == 5) {
    let showMess = document.getElementById("resultText");
    showMess.textContent = "You lose!";
    return 1;
  }
  return 0;
};

let playerScore = 0;
let compScore = 0;
let totalGames = 0;
let round = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerText = document.getElementById("playerScore");
const compText = document.getElementById("compScore");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  resetFunc();
  updateScores(0, 0);
});

rockBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("rock", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
  let result = gameOver(playerScore, compScore);
  if (result == 1) resetFunc();
});

paperBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("paper", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
  let result = gameOver(playerScore, compScore);
  if (result == 1) resetFunc();
});

scissorsBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("scissors", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
  let result = gameOver(playerScore, compScore);
  if (result == 1) resetFunc();
});
