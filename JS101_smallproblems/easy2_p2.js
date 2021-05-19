const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is your name? ');
let answer = readline.question();

function whoIsIt(str) {
  if (str[str.length - 1] === '!') {
    let newStr = str.slice(0, str.length - 1).toUpperCase();
    return `HELLO ${newStr}. WHY ARE WE SCREAMING?`;
  } else {
    return `Hello ${str}.`;
  }
}

prompt(whoIsIt(answer));