const readline = require('readline-sync');
const USER_STRING = 'Enter "s" to compute the sum or "p" to compute the product. ';
const VALID_STR_INPUT = ['s', 'p'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let numberArr = [];
for (let index = 0; index < 4; index++) {
  prompt(`Please enter ${index + 1} element for the array of 4 elements: `);
  let num = Number(readline.question());
  numberArr.push(num);
}

prompt(USER_STRING);
let operationSelected = readline.question();
while (!VALID_STR_INPUT.includes(operationSelected)) {
  prompt(USER_STRING);
  operationSelected = readline.question();
}

function sumOrProduct(arr, operation) {
  if (operation === 's') {
    let sumOfElements = arr.reduce((acc, value) => acc + value);
    prompt(`The sum of integers in the ${arr} is ${sumOfElements}`);
  } else {
    let productOfElements = arr.reduce((acc, value) => acc * value);
    prompt(`The product of the integers in the ${arr} is ${productOfElements}`);
  }
}

sumOrProduct(numberArr, operationSelected);