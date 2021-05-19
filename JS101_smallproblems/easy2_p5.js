const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the first number: ');
let number1 = Number(readline.question());
prompt('Enter the second number: ');
let number2 = Number(readline.question());

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${number1 / number2}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${number1 ** number2}`);
