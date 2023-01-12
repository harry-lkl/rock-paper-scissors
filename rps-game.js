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

// prompt player to select 'rock', 'paper', or 'scissors' and store it in a variable playerSelection
// make it case insensitive, aka make input lower caps
// pass choices into an array
// compare the two selections with win conditions
    // compare win conditions: ['rock','rock'] etc returns 'It's a Draw!'
// return a string that says something like "You Lose! Paper beats Rock"
function playRound (string) {
    const playerSelection = string.toLowerCase();
    const computerSelection = getComputerChoice();
    const getBothSelections = playerSelection + computerSelection;
    const playerSelectionUpperCase = `${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}`;
    const computerSelectionUpperCase = `${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}`

    console.log(playerSelectionUpperCase);
    console.log(computerSelectionUpperCase);
    // console.log(getBothSelections);

    if (getBothSelections === 'rockrock' || getBothSelections === 'paperpaper' || getBothSelections === 'scissorsscissors') {
        console.log(`It's a draw!`);
    } else if (getBothSelections === 'paperrock' || getBothSelections === 'scissorspaper' || getBothSelections === 'rockscissors') {
        runningCount++;
        console.log(`You Win! ${playerSelectionUpperCase} Beats ${computerSelectionUpperCase}!`);
    } else {
        runningCount--;
        console.log(`You Lose! ${computerSelectionUpperCase} Beats ${playerSelectionUpperCase}!`);
    }
}

console.log(runningCount);

function game () {
    for (let i = 0; i < 5; i++) {
        let getPlayerPrompt = window.prompt(`What's your move?`);
        playRound(getPlayerPrompt);
        // console.log(runningCount);
    }
    if (runningCount === 0) {
        return `Match Over, It's a Draw!`;
    } else if (runningCount < 0) {
        return `Match Over, You Win!`;
    } else {
        return `Match Over, You Lose!`;
    }
}

// store result in a variable
// 12/1: added running count, start at step 6