let myNumbers = [1, 4, 3, 7, 2, 6];
let multipliedNumbers = [];

function multiply(numbers, multiplyBy) {
  for (let index = 0; index < numbers.length; index++) {
    multipliedNumbers.push(numbers[index] * multiplyBy);
  }
  return multipliedNumbers;
}

console.log(multiply(myNumbers, 3));