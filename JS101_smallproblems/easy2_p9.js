
function stringToIntegers(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayDigits = string.split('').map(char => DIGITS[char]);
  let value = 0;
  arrayDigits.reverse().forEach((num, index) => {
    value += num * (10 ** index);
  });
  return value;
}

console.log(stringToIntegers('4321'));
console.log(stringToIntegers('570'));

