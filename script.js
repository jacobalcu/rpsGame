let getComputerChoice = () => {
    let numChoice = Math.floor(Math.random() * 3);
    let choice = ((numChoice==0) ? 'rock' : (numChoice==1) ? 'paper' : 'scissors');
    console.log(choice);
    return choice;
}

let playRound = (playerSelection, computerSelection) => {
    let retMessage;
    if (playerSelection == computerSelection) retMessage = "You tied!";
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        retMessage = "You Lose! Paper beats Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        retMessage = "You Win! Rock beats Scissors";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        retMessage = "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        retMessage = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        retMessage = "You Win! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        retMessage = "You Lose! Rock beats Scissors";
    }
    return retMessage;
}

const playerSelection = prompt('Rock/Paper/Scissors...');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));