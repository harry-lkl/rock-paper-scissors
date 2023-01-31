// functions for a game of rock paper scissors
let playerScore = 0;
let computerScore = 0;
let matchCount = 1;
const gameLength = 5;
const roundInfo = document.getElementById('roundInfo');
const score = document.getElementById('score');
const message = document.getElementById('message');
message.textContent = `match 1 of ${gameLength}`;

function game(selection) {
    if (matchCount > gameLength) {
        return;
    }
    const bothSelections = playRound(selection);
    scoreBoard(bothSelections);
}

function playRound(playerSelection) {
    const choice = ['Rock', 'Paper', 'Scissors']
    const getComputerChoice = () => choice[Math.floor(Math.random() * choice.length)];
    const computerSelection = getComputerChoice();
    const bothSelections = [playerSelection,computerSelection];
    return bothSelections;
}

function scoreBoard(bothSelectionsArr) {
    const bothSelections = bothSelectionsArr[0] + bothSelectionsArr[1];
    const playerSelection = bothSelectionsArr[0];
    const computerSelection = bothSelectionsArr[1];

    if (bothSelections === 'RockRock' || bothSelections === 'PaperPaper' || bothSelections === 'ScissorsScissors') {
        roundInfo.textContent = `Computer played ${computerSelection}. It's a draw!`;
    } else if (bothSelections === 'PaperRock' || bothSelections === 'ScissorsPaper' || bothSelections === 'RockScissors') {
        playerScore++;
        roundInfo.textContent = `Computer played ${computerSelection}. You Win!`;
    } else {
        computerScore++;
        roundInfo.textContent = `Computer played ${computerSelection}. You Lose!`;
    }

    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    matchCount++;
    message.textContent = `match ${matchCount} of ${gameLength}`;


    if (matchCount >= gameLength + 1) {
        if (playerScore === computerScore) {
            message.textContent =`Match over, it's a draw!`;
        } else if (playerScore > computerScore) {
            message.textContent =`Match over, you win!`;
        } else if (playerScore < computerScore) {
            message.textContent =`Match over, you lose!`;
        } else {
            message.textContent =`how did you get here?`;
        }
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    matchCount = 1;
    roundInfo.textContent = `-`
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    message.textContent = `match 1 of ${gameLength}`;
}