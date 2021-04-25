const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'Scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
           (choice === 'rock' && computerChoice === 'paper') ||
           (choice === 'paper' && computerChoice === 'scissors')) {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer;

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Thats not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let finalCall = displayWinner(choice, computerChoice);
  prompt(finalCall);

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
} while (answer[0] === 'y');

