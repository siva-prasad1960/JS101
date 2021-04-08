/* eslint-disable max-statements */
let jsonMessages = require('./calculator_messages.json');

let readline = require('readline-sync');

// function for => 
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to check for valid integers
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("which language would you prefer?\n1) English 2) Española");
let language = readline.question();

// function for language choice 10 en 2) ep
function languageChoice() {
  prompt("which languages would you prefer?\n1) English 2) Española");
  language = readline.question();
  if (!'12'.includes(language)) {
    languageChoice();
  }
}

// functiom for json inner structures check
function languageChecks(name) {
  if (language === '1') {
    prompt(jsonMessages['English'][name]);
  } else if (language === '2') {
    prompt(jsonMessages['Spanish'][name]);
  }
}

if (language === '1') {
  prompt(jsonMessages['English']['welcome']);
} else if (language === '2') {
  prompt(jsonMessages['Spanish']['welcome']);
} else {
  languageChoice();
}


let number1;

// function for first number
function firstNumber() {
  languageChecks('first Number');
  number1 = readline.question();
  while (invalidNumber(number1)) {
    languageChecks('invalid number');
    number1 = readline.question();
  }
}

let number2;

// function for second number
function secondNumber() {
  languageChecks('second Number');
  number2 = readline.question();
  while (invalidNumber(number2)) {
    languageChecks('invalid number');
    number2 = readline.question();
  }
}

let operationNeeded;

// function for choosing arthimetic operations
function operation() {
  languageChecks('what operation');
  operationNeeded = readline.question();
  while (!['1', '2', '3', '4'].includes(operationNeeded)) {
    languageChecks('choose number');
    operationNeeded = readline.question();
  }
}

let output;

// function for performing arthimetic operations
function result() {
  console.log(`${Number(number1)}, ${Number(number2)}`);
  switch (operationNeeded) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      if (Number(number2) === 0) {
        console.log('Infinity');
      }
      output = Number(number1) / Number(number2);
      break;
  }
}

let answer;

// function for subsequent round of arthimetic calculations
function anotherCalculation() {
  languageChoice();
  languageChecks('another operation');
  answer = readline.question();
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'si') {
    firstNumber();
    secondNumber();
    operation();
    result();
    languageChecks('result');
    console.log(output);
    anotherCalculation();
  } else if (answer.toLowerCase() === 'no') {
    prompt('OK');
  // eslint-disable-next-line no-constant-condition
  } else if (answer.toLowerCase() !== 'yes' || 'no' || 'si') {
    prompt("Please answer 'yes', 'no' 'si'");
    anotherCalculation();
  }
}

firstNumber();
secondNumber();
operation();
result();
languageChecks('result');
console.log(output);
anotherCalculation();


