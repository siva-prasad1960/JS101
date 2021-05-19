function multisum(inputNumber) {
  let arr = [];
  for (let number = 1; number <= inputNumber; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      arr.push(number);
    } else if (number % 3 === 0) {
      arr.push(number);
    } else if (number % 5 === 0) {
      arr.push(number);
    }
  }
  return arr.reduce((acc, sum) => acc + sum);
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));