const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_ALT = ['r', 'p', 's', 'l', 'sp'];

// function for user prompt + message.
function prompt(message) {
  console.log(`=> ${message}`);
}

// function for deciding winner when user choice = rock.
function winnerRock(computerChoice) {
  prompt(`You chose ${VALID_CHOICES[0]}, computer chose ${computerChoice}`);
  if (computerChoice === 'lizard' || computerChoice === 'scissors') {
    return 'You win!';
  } else if (computerChoice === 'paper' || computerChoice === 'spock') {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
}

// function for deciding winner when user choice = paper.
function winnerPaper(computerChoice) {
  prompt(`You chose ${VALID_CHOICES[1]}, computer chose ${computerChoice}`);
  if (computerChoice === 'rock' || computerChoice === 'spock') {
    return 'You win!';
  } else if (computerChoice === 'scissors' || computerChoice === 'lizard') {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
}

// function for deciding winner when user choice = scissors.
function winnerScissors(computerChoice) {
  prompt(`You chose ${VALID_CHOICES[2]}, computer chose ${computerChoice}`);
  if (computerChoice === 'paper' || computerChoice === 'lizard') {
    return 'You win';
  } else if (computerChoice === 'spock' || computerChoice === 'rock') {
    return 'Computer wins';
  } else {
    return "It's a tie";
  }
}

// function for deciding winner when user choice = lizard.
function winnerLizard(computerChoice) {
  prompt(`You chose ${VALID_CHOICES[3]}, computer chose ${computerChoice}`);
  if (computerChoice === 'spock' || computerChoice === 'paper') {
    return 'You win!';
  } else if (computerChoice === 'rock' || computerChoice === 'scissors') {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
}


// function for deciding winner when user choice = rock.
function winnerSpock(computerChoice) {
  prompt(`You chose ${VALID_CHOICES[4]}, computer chose ${computerChoice}`);
  if (computerChoice === 'scissors' || computerChoice === 'rock') {
    return 'You win!';
  } else if (computerChoice === 'lizard' || computerChoice === 'paper') {
    return 'Computer wins!';
  } else {
    return "It's a tie";
  }
}

let userArr = [];
let computerArr = [];

// function to keep win count for both user and computer.
function winCount(finalCall) {
  while (finalCall.includes('You')) {
    userArr.push('You');
    break;
  }
  while (finalCall.includes('Computer')) {
    computerArr.push('Computer');
    break;
  }
}

// function for checking if user or computer reaches to 5 wins first.
function checkInWinner() {
  if (userArr.length === 5) {
    return "User is a grand winner, first to 5 wins!";
  } else if (computerArr.length === 5) {
    return "Computer is the grand winner, first to 5 wins!";
  } else {
    return "";
  }
}

let answer;

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} or ${VALID_CHOICES_ALT.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice) &&
        !VALID_CHOICES_ALT.includes(choice)) {
    prompt("Thats not a valid choice");
    choice = readline.question();
  }

  let finalCall;
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  if (choice === 'rock' || choice === 'r') {
    finalCall = winnerRock(computerChoice);
    prompt(finalCall);
    winCount(finalCall);
  } else if (choice === 'paper' || choice === 'p') {
    finalCall = winnerPaper(computerChoice);
    prompt(finalCall);
    winCount(finalCall);
  } else if (choice === 'scissors' || choice === 's') {
    finalCall = winnerScissors(computerChoice);
    prompt(finalCall);
    winCount(finalCall);
  } else if (choice === 'lizard' || choice === 'l') {
    finalCall = winnerLizard(computerChoice);
    prompt(finalCall);
    winCount(finalCall);
  } else if (choice === 'spock' || choice === 'sp') {
    finalCall = winnerSpock(computerChoice);
    prompt(finalCall);
    winCount(finalCall);
  }

  let eureka = checkInWinner();

  if (eureka === "") {
    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
  } else {
    prompt(eureka);
    break;
  }
} while (answer === 'y');