/* eslint-disable max-lines-per-function */
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// we want one sub array at a time.
// odd numbers sum in each sub array
// will result in sorting of the original array.
// highest sum to lowest sum.

let newArray = arr.sort((a, b) => {
  let sumOfOddsOfA = 0;
  let sumOfOddsOfB = 0;
  for (const element of a) {
    if (element % 2 !== 0) {
      sumOfOddsOfA += element;
    }
  }
  for (const element1 of b) {
    if (element1 % 2 !== 0) {
      sumOfOddsOfB += element1;
    }
  }
  if (sumOfOddsOfA > sumOfOddsOfB) {
    return 1;
  } else if (sumOfOddsOfB > sumOfOddsOfA) {
    return -1;
  } else {
    return 0;
  }
});

console.log(newArray);