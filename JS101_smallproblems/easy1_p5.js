const readline = require('readline-sync');

console.log('Please enter the bill amount: ');
let bill = Number(readline.question());
console.log('Please enter the tip in percentage: ');
let tipPercentage = Number(readline.question());

function tipAndFinalBill(tip, bill) {
  let tipAmount = (tip * bill) / 100;
  let finalBill = bill + tipAmount;

  console.log(`The tip is: ${tipAmount.toFixed(2)}`);
  console.log(`The total is: ${finalBill.toFixed(2)}`);
}

tipAndFinalBill(tipPercentage, bill);