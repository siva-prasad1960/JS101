let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(newArr);

console.log(arr);


