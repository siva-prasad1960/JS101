let myNumbers = [1, 4, 3, 7, 2, 6];
let doubleNums = [];

function doubleOddIndices(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (index !== 0 || index % 2 !== 0) {
      doubleNums.push(numbers[index] * 2);
    } else {
      doubleNums.push(numbers[index]);
    }
  }
  return doubleNums;
}

console.log(doubleOddIndices(myNumbers));
console.log(myNumbers);