import { startConfetti, stopConfetti, removeConfetti } from './confetti.js'

const playerChoice = document.getElementById('playerChoice');
const playerScoreEl = document.getElementById('playerScore');
const computerChoice = document.getElementById('computerChoice');
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('result-text');
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissor = document.getElementById('playerScissor');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissor = document.getElementById('computerScissor');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
const icons = document.querySelectorAll('.far');
const resetBtn = document.querySelector('.reset-icon');
resetBtn.addEventListener('click', resetAll);

let computerRadomChoice = '';
let playerScore = 0;
let computerScore = 0;

function resetSelection() {
  icons.forEach((icon) => {
    icon.classList.remove('selected');
  });

  stopConfetti();
  removeConfetti();
}

function randomComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.2) {
    computerRadomChoice = 'rock';
  } else if (randomNumber <= 0.4) {
    computerRadomChoice = 'paper';
  } else if (randomNumber <= 0.6) {
    computerRadomChoice = 'scissor';
  } else if (randomNumber <= 0.8) {
    computerRadomChoice = 'lizard';
  } else {
    computerRadomChoice = 'spock';
  }
}

function printScore(selectedChoice) {
  let choice = choices[selectedChoice];
  if (selectedChoice == computerRadomChoice) {
    resultText.textContent = 'It\'s A Tie';
  } else {
    if (choice.defeats.lastIndexOf(computerRadomChoice) > -1) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      resultText.textContent = 'You Won!';
      startConfetti();
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultText.textContent = 'You Lost!';
    }
  }
}

function checkResult(selectedChoice) {
  resetSelection();
  randomComputerChoice();
  printComputerChoice(computerRadomChoice);
  printScore(selectedChoice);
}

function select(selectedChoice) {
  checkResult(selectedChoice);
  switch (selectedChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoice.textContent = ` --- ${selectedChoice}`;
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoice.textContent = ` --- paper`;
      break;

    case 'scissor':
      playerScissor.classList.add('selected');
      playerChoice.textContent = ` --- ${selectedChoice}`;
      break;

    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoice.textContent = ` --- ${selectedChoice}`;
      break;

    case 'spock':
      playerSpock.classList.add('selected');
      playerChoice.textContent = ` --- ${selectedChoice}`;
      break;
  }
}
window.select = select;

function printComputerChoice(computerRandomChoice) {
  switch (computerRadomChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoice.textContent = ` --- ${computerRandomChoice}`;
      break;

    case 'paper':
      computerPaper.classList.add('selected');
      computerChoice.textContent = ` --- paper`;
      break;

    case 'scissor':
      computerScissor.classList.add('selected');
      computerChoice.textContent = ` --- ${computerRandomChoice}`;
      break;

    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoice.textContent = ` --- ${computerRandomChoice}`;
      break;

    case 'spock':
      computerSpock.classList.add('selected');
      computerChoice.textContent = ` --- ${computerRandomChoice}`;
      break;
  }
}

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissor: { name: 'Scissor', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

function resetAll() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerChoice.textContent = '';
  computerChoice.textContent = '';
  resultText.textContent = '';
  resetSelection();
}

resetAll();



