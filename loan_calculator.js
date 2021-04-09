let readline = require('readline-sync');

let jsonMessages = require('./messages.json');

let regExpLoanAmount = /(\d{1,20}\.*\d{1,20})\s*dollars?/i;

let regExpAnnualRate = /(^\d{1,10}\.?\d{0,20}?)\s*%/i;

let regExpLoanDurationYears = /(^\d{1,20}\.?\d?)\s*years?/i;

prompt("Welcome to loan calculator!");

let loanAmountInDollars;

let AnnualRateInPercentage;

let loanDurationInYears;

// function for user prompt.
function prompt(greeting) {
  console.log(`=> ${greeting}`);
}

// function for lead question to users for input.
function intialMessages() {
  prompt(jsonMessages['loan amount']);
  loanAmountInDollars = readline.question();

  prompt(jsonMessages['annual rate']);
  AnnualRateInPercentage = readline.question();

  prompt(jsonMessages['loan duration']);
  loanDurationInYears = readline.question();
}

// function to validate the user input.
function formatValid(str, regexp, message) {
  if (!regexp.test(str)) {
    prompt(message);
    if (message === jsonMessages['loan amount']) {
      loanAmountInDollars = readline.question();
      str = loanAmountInDollars;
      formatValid(str, regexp, message);
    } else if (message === jsonMessages['annual rate']) {
      AnnualRateInPercentage = readline.question();
      str = AnnualRateInPercentage;
      formatValid(str, regexp, message);
    } else if (message === jsonMessages['loan duration']) {
      loanDurationInYears = readline.question();
      str = loanDurationInYears;
      formatValid(str, regexp, message);
    }
  }
}

// function to convert loan duration from years to months.
let loanDurationInMonths;

function loanDurationYearToMonth(time) {
  let loanList = time.match(regExpLoanDurationYears)[1].split('.');
  if (Number(loanList[1] !== undefined)) {
    loanDurationInMonths = (Number(loanList[0]) * 12) + Number(loanList[1]);
  } else {
    loanDurationInMonths = (Number(loanList[0]) * 12);
  }
}

//function to convert APR to Monthly Interest Rate.
let monthlyRate;

function monthlyInterestRate(APR) {
  let aprList = APR.match(regExpAnnualRate)[1];
  monthlyRate = (Number(aprList) / 100) / 12;
}

// function to calculate monthly payment.
let monthlyPay;

function monthlyPayment(duration, rate, amt) {
  let amtList = Number(amt.match(regExpLoanAmount)[1]);
  // eslint-disable-next-line max-len
  monthlyPay = (amtList * (rate / (1 - Math.pow((1 + rate), (-duration))))).toFixed(2);
}

// function to convert monthlyPay to dollars and cents.
let newPay;

function dollarCents(pay) {
  newPay = pay.split('.');
  prompt(`Payment due every month is: ${newPay[0]} dollars and ${newPay[1]} cents.`);
  prompt('Payment due every month is $' + pay + ".");
}

// function for another user calculation.
let answer;

function anotherCalculation() {
  prompt("Do you want to perform another calculation?");
  answer = readline.question();
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    intialMessages();
    formatValid(loanAmountInDollars, regExpLoanAmount, jsonMessages['loan amount']);
    formatValid(AnnualRateInPercentage, regExpAnnualRate, jsonMessages['annual rate']);
    formatValid(loanDurationInYears, regExpLoanDurationYears, jsonMessages['loan duration']);
    loanDurationYearToMonth(loanDurationInYears);
    monthlyInterestRate(AnnualRateInPercentage);
    monthlyPayment(loanDurationInMonths, monthlyRate, loanAmountInDollars);
    dollarCents(monthlyPay);
    anotherCalculation();
  } else {
    prompt("Good Bye!");
  }
}

// Program Flow.

intialMessages();
formatValid(loanAmountInDollars, regExpLoanAmount, jsonMessages['loan amount']);
formatValid(AnnualRateInPercentage, regExpAnnualRate, jsonMessages['annual rate']);
formatValid(loanDurationInYears, regExpLoanDurationYears, jsonMessages['loan duration']);
loanDurationYearToMonth(loanDurationInYears);
monthlyInterestRate(AnnualRateInPercentage);
monthlyPayment(loanDurationInMonths, monthlyRate, loanAmountInDollars);
dollarCents(monthlyPay);
anotherCalculation();