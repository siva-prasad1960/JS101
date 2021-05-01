let numbers = [1, 2, 3, 4];

console.log(numbers.length);
console.log(numbers.length = 0);
console.log(numbers);

console.log(numbers.splice(0, numbers.length));
console.log(numbers);

while (numbers.length) {
  numbers.pop();
}

console.log(numbers);