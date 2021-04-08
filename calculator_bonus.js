/* eslint-disable max-statements */
let jsonMessages = require('./calculator_messages.json');

let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("which language would you prefer?\n1) English 2) Española");
let language = readline.question();

function languageChoice() {
  prompt("which language would you prefer?\n1) English 2) Española");
  language = readline.question();
}


if (language === '1') {
  prompt(jsonMessages['English']['welcome']);
} else {
  prompt(jsonMessages['Spanish']['welcome']);
}


let number1;

function firstNumber() {
  if (language === '1') {
    prompt(jsonMessages['English']['first Number']);
  } else {
    prompt(jsonMessages['Spanish']['first Number']);
  }
  number1 = readline.question();
  while (invalidNumber(number1)) {
    if (language === '1') {
      prompt(jsonMessages['English']['invalid number']);
    } else {
      prompt(jsonMessages['Spanish']['invalid number']);
    }
    number1 = readline.question();
  }
}

let number2;

function secondNumber() {
  if (language === '1') {
    prompt(jsonMessages['English']['second Number']);
  } else {
    prompt(jsonMessages['Spanish']['second Number']);
  }
  number2 = readline.question();
  while (invalidNumber(number2)) {
    if (language === '1') {
      prompt(jsonMessages['English']['invalid number']);
    } else {
      prompt(jsonMessages['Spanish']['invalid number']);
    }
    number2 = readline.question();
  }
}

let operationNeeded;

function operation() {
  if ( language === '1') {
    prompt(jsonMessages['English']['what operation']);
  } else {
    prompt(jsonMessages['Spanish']['what operation']);
  }
  operationNeeded = readline.question();
  while (!['1', '2', '3', '4'].includes(operationNeeded)) {
    if (language === '1') {
      prompt(jsonMessages['English']['choose number']);
    } else {
      prompt(jsonMessages['Spanish']['choose number']);
    }
    operationNeeded = readline.question();
  }
}

let output;

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
      output = Number(number1) / Number(number2);
      break;
  }
}

let answer;

// eslint-disable-next-line max-lines-per-function
function anotherCalculation() {
  languageChoice();
  if (language === '1') {
    prompt(jsonMessages['English']['another operation']);
  } else {
    prompt(jsonMessages['Spanish']['another operation']);
  }
  answer = readline.question();
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'si') {
    firstNumber();
    secondNumber();
    operation();
    result();
    if (language === '1') {
      prompt(jsonMessages['English']['result']);
    } else {
      prompt(jsonMessages['Spanish']['result']);
    }
    console.log(output);
    anotherCalculation();
  } else if (answer.toLowerCase() === 'no') {
    prompt('OK');
  }
}

firstNumber();
secondNumber();
operation();
result();
if (language === '1') {
  prompt(jsonMessages['English']['result']);
} else {
  prompt(jsonMessages['Spanish']['result']);
}
console.log(output);
anotherCalculation();


