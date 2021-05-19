const readline = require('readline-sync');
const USER_NUMBER = 'Please enter an integer greater than 0: ';
const USER_STRING = 'Enter "s" to compute the sum or "p" to compute the product. ';

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(USER_NUMBER);
let number = Number(readline.question());
while (number <= 0) {
  prompt(USER_NUMBER);
  number = Number(readline.question());
}


prompt(USER_STRING);
let operationSelected = readline.question();
while (!['s', 'p'].includes(operationSelected)) {
  prompt(USER_STRING);
  operationSelected = readline.question();
}

function sumOrProduct(num, operation) {
  let arr = [];
  let userNumber = num;
  while (userNumber > 0) {
    arr.push(userNumber);
    userNumber -= 1;
  }
  if (operation === 's') {
    let sumOfElements = arr.reduce((acc, value) => acc + value);
    console.log(`The sum of integers between 1 and ${num} is ${sumOfElements}`);
  } else {
    let productOfElements = arr.reduce((acc, value) => acc * value);
    console.log(`The product of the integers between 1 and ${num} is ${productOfElements}`);
  }
}

sumOrProduct(number, operationSelected);