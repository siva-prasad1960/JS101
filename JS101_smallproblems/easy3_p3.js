function stringy(number) {
  let newString;
  if (number % 2 === 0) {
    newString = '10'.repeat(number / 2);
  } else {
    newString = '10'.repeat(number / 2) + '1';
  }
  return newString;
}

console.log(stringy(6));
console.log(stringy(7));
console.log(stringy(4));
console.log(stringy(9));

