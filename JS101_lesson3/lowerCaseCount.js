let statement1 = "The Flintstones Rock it!";
let statement2 = "Easy come, easy go.";

console.log([].concat(...statement1).filter((str) => str === 't').length);

console.log([].concat(...statement2).filter((str) => str === 't').length);

