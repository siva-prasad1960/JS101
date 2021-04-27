const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_SHORTHAND = ['r', 'p', 's', 'l', 'sp'];
const WIN_SCORE = 5;
const WINNING_CHOICES = {
  r: ['lizard', 'scissors'],
  p: ['rock', 'spock'],
  s: ['paper', 'lizard'],
  l: ['spock', 'paper'],
  sp: ['scissors', 'rock']
};

// function for user prompt + message.
function prompt(message) {
  console.log(`=> ${message}`);
}

let userScore = 0;
let computerScore = 0;

// function to keep win count for both user and computer.
function updateScore(finalCall) {
  while (finalCall.includes('You')) {
    userScore += 1;
    break;
  }
  while (finalCall.includes('Computer')) {
    computerScore += 1;
    break;
  }
}

//function to print tally at the end of each match.
function displayTally() {
  prompt(`Your score is: ${userScore}, Computer score is: ${computerScore}`);
}

// function for checking if user or computer reaches to WIN_SCORE wins first.
function checkInWinner() {
  if (userScore === WIN_SCORE) {
    return `User is a grand winner, first to ${WIN_SCORE} wins!`;
  } else if (computerScore === WIN_SCORE) {
    return `Computer is the grand winner, first to ${WIN_SCORE} wins!`;
  } else {
    return "";
  }
}

// Welcome prompt before the start of a fresh game.
prompt(`Welcome to the game of ${VALID_CHOICES}, race to ${WIN_SCORE} between you and the computer.`);
let answer;

// Game flow
do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} or ${VALID_CHOICES_SHORTHAND.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) &&
        !VALID_CHOICES_SHORTHAND.includes(choice)) {
    prompt("Thats not a valid choice");
    choice = readline.question();
  }

  // statement to convert SHORTHAND to FULL choice names for user display msg.
  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
    case 'sp':
      choice = 'spock';
      break;
    default:
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // winning logic.
  if (WINNING_CHOICES[choice[0]].includes(computerChoice)) {
    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    prompt('You win!');
    updateScore('You win!');
    displayTally();
  } else if (!WINNING_CHOICES[choice[0]].includes(computerChoice)) {
    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    prompt('Computer wins!');
    updateScore('Computer Wins');
    displayTally();
  } else {
    prompt("It's a tie");
  }

  let eureka = checkInWinner();

  if (eureka === "") {
    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();
    while (answer !== 'n' && answer !== 'y' && answer !== 'no' && answer !== 'yes') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
  } else {
    prompt(eureka);
    break;
  }
} while (answer === 'y' || answer === 'yes');