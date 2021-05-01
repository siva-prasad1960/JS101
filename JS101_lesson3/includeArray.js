let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

function numberExists(numbers, num) {
  if (numbers.indexOf(num) > 0 ) {
    return true;
  } else {
    return false;
  }
}

console.log(numberExists(numbers, number1));
console.log(numberExists(numbers, number2));

// other way
console.log(numbers.includes(8));
console.log(numbers.includes(95));