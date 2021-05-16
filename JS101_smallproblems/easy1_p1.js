// P
// input : one integer (+ve or -ve or 0)
// output : boolean (true) if input obsolute value is odd.
// assumption : input is valid integer.

// E
/*
console.log(isOdd(2)); // => false, 2 is 2 far away from zero
console.log(isOdd(5)); // => true, 5 is 5 far away from zero
console.log(isOdd(-17)); // => true // -17 is 17 far away from zero
console.log(isOdd(-8)); // => false // -8 is 8 far away from zero
console.log(isOdd(0)); // => false // 0 is 0 far away from zero
console.log(isOdd(7)); // => true // 7 is 7 far away from zero
*/

// D
// empty

// A
// function takes in a number
// if obsulte value is odd
// return true.
// absolute value implies how far from zero is the given number

function isOdd(num) {
  return (Math.abs(num) % 2 !== 0);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true