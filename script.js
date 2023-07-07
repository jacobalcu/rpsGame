let getComputerChoice = () => {
    let numChoice = Math.floor(Math.random() * 3);
    let choice = ((numChoice==0) ? 'Rock' : (numChoice==1) ? 'Paper' : 'Scissors');
    console.log(choice);
    return choice;
}