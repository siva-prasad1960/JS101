let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// one way
let arr = Object.values(obj);

let arr1 = [];

for (let index = 0; index < arr.length; index++) {
  arr1 += Object.values(obj)[index];
}

arr1.split(',').join('').split('').forEach(char => {
  if ('aeiou'.includes(char)) {
    console.log(char);
  }
});

// differnt way
const VOWELS = 'abcde';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
});