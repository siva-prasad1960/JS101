let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice().reverse());

console.log([...numbers].sort((num1, num2) => num2 - num1));

let reversedNumbers = [];
numbers.forEach((num) => reversedNumbers.push(num));

console.log(reversedNumbers.reverse());

console.log(numbers);
