// define a function <name> that takes two numbers.
// In the function body, retrun sum of the numbers.

// Formal pseudocode
// START
// SET - readline-sync library needed and set to a variable.
// SET and GET - set the varible to the GET (user input) value.
// Function declaration with two parameters.
// PRINT - function call

let readline = require('readline-sync');

let number1 = Number(readline.question("What's the first nummber?\n"));

let number2 = Number(readline.question("What's the second number?\n"));

function sum_of_two_numbers(a, b) {
  return a + b;
};

console.log(`Sum of ${number1} and ${number2} equals to: ${sum_of_two_numbers(number1, number2)}`);



