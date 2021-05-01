let numbers = [5, 1, 4, 6];

// find min. value using reduce().

console.log(numbers.reduce((acc, element) => (acc < element ? acc : element)));