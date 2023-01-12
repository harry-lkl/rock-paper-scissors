// return a random choice from 'rock', 'paper', or 'scissors' and
// store it in a variable computerSelection, name funtion getComputerChoice
    // put 'rock', 'paper', 'scissors' into an array called choices
    // generate a random number from 0, 1, 2, and use it to select one of the selections from choice
    // store the selected string in the constant computerSelection

const choice = ['rock', 'paper', 'scissors']
getComputerChoice = () => choice[Math.floor(Math.random() * choice.length)];
const computerSelection = getComputerChoice();
// console.log(typeof computerSelection);
// console.log(computerSelection);


// prompt player to select 'rock', 'paper', or 'scissors' and store it in a variable playerSelection
// make it case insensitive, aka make input lower caps


// compare the two selections with win conditions
    // pass both choices into an array
    // compare win conditions: ['rock','rock'] etc returns 'It's a draw!'

// return a string that says something like "You Lose! Paper beats Rock"