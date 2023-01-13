// return a random choice from 'rock', 'paper', or 'scissors' and
// store it in a variable computerSelection, name funtion getComputerChoice
    // put 'rock', 'paper', 'scissors' into an array called choices
    // generate a random number from 0, 1, 2, and use it to select one of the selections from choice
    // store the selected string in the constant computerSelection

const choice = ['rock', 'paper', 'scissors']
const getComputerChoice = () => choice[Math.floor(Math.random() * choice.length)];
// console.log(typeof computerSelection);
// console.log(computerSelection());

let runningCount = 0;
// draw is 0, player win is +1, computer win is -1

// prompt player to select 'rock', 'paper', or 'scissors' and store it in a variable playerSelection
// make it case insensitive, aka make input lower caps
// pass choices into an array
// compare the two selections with win conditions
    // compare win conditions: ['rock','rock'] etc returns 'It's a Draw!'
// return a string that says something like "You Lose! Paper beats Rock"
function playRound (string) {
    const playerSelection = string.toLowerCase();
    const computerSelection = getComputerChoice();
    const bothSelections = playerSelection + computerSelection;
    const playerSelectionUpperCase = `${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}`;
    const computerSelectionUpperCase = `${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}`

    console.log(playerSelectionUpperCase);
    console.log(computerSelectionUpperCase);
    // console.log(getBothSelections);

    if (bothSelections === 'rockrock' || bothSelections === 'paperpaper' || bothSelections === 'scissorsscissors') {
        console.log(`It's a draw!`);
    } else if (bothSelections === 'paperrock' || bothSelections === 'scissorspaper' || bothSelections === 'rockscissors') {
        runningCount++;
        console.log(`You Win! ${playerSelectionUpperCase} Beats ${computerSelectionUpperCase}!`);
    } else {
        runningCount--;
        console.log(`You Lose! ${computerSelectionUpperCase} Beats ${playerSelectionUpperCase}!`);
    }
}

// need function to:
// validate if player input is a string; if yes then proceed to toLowerCase and check if input is one of the moves
// : if not prompt player to input a valid input
// ^not neccessary if GUI


// prompt player to input their move, then pass into play round, playes 5 games
// use running count to determine the result of the match
function game () {
    for (let i = 0; i < 5; i++) {
        let playerPrompt = window.prompt(`What's your move?`);
        playRound(playerPrompt);
        // console.log(runningCount); 
    }
    if (runningCount === 0) {
        console.log(`Match Over, It's a Draw!`);
    } else if (runningCount > 0) {
        console.log(`Match Over, You Win!`);
    } else if (runningCount < 0) {
        console.log(`Match Over, You Lose!`);
    } else {
        console.log(`how did you get here?`);
    }
}

game();
