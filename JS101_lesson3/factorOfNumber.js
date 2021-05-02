function factors(number) {
  let divisor = number;
  let factors = [];
  for (let decr = number; decr > 0; decr--) {
    if (number > 0 && number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(8));
console.log(factors(24));
console.log(factors(-8));
console.log(factors(0));