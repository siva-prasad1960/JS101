let statement = "The Flintstones Rock";

let frequency = [];

let alphas = statement.split('').filter(char => char !== ' ');

alphas.forEach((char) => {
  if (frequency.hasOwnProperty(char) === false) {
    frequency[char] = 1;
  } else {
    frequency[char] += 1;
  }
}
);

console.log(frequency);