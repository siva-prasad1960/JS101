// Given a collection of integers.
/* write a function whose body contains
code for skipping alternate element in the
array */


// Formal pseudocode
// START
// SET - variable to value - an array with integers.
// SET - varibale to value - empty array.
// define a function - parameters? ONE param (Integer array).
// Function body - FOR loop over IF/ELSE.
// PRINT - to console the new array.


numbers_array = [1, 2, 3, 4, 5, 6];

new_array = [];

function alt_array (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i % 2 === 0) {
      new_array.push(arr[i]);
    }
  }
  return new_array;
};

console.log(alt_array(numbers_array));