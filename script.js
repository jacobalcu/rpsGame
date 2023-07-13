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

// let game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let tie = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Rock/Paper/Scissors...').toLowerCase();
//         const computerSelection = getComputerChoice();
//         let roundWin = playRound(playerSelection, computerSelection);
//         if (roundWin == 0) {
//             tie++;
//         } else if (roundWin == 1) {
//             computerScore++;
//         } else {
//             playerScore++;
//         }
//     }

//     if (playerScore == computerScore) {
//         console.log(`You tied! Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tie}`);
//     } else if (playerScore < computerScore) {
//         console.log(`You lose! Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tie}`);
//     } else {
//         console.log(`You win! Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tie}`);
//     }
// }

// game();

let playerScore = 0;
let compScore = 0;
let totalGames = 0;
let round = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerText = document.getElementById("playerScore");
const compText = document.getElementById("compScore");

rockBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("rock", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
});

paperBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("paper", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
});

scissorsBtn.addEventListener("click", () => {
  let compChoice = getComputerChoice();
  round = playRound("scissors", compChoice);
  totalGames++;
  if (round == 1) compScore++;
  else if (round == 2) playerScore++;
  updateScores(playerScore, compScore);
});
