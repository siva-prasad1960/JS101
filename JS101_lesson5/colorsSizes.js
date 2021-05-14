/* eslint-disable max-len */
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' }
// };

// input : object, output: array
// array value : colors of fruits and size of fruits.
// colors = Capitalized, sizes = Uppercased

// let newArr = Object.values(obj).map(obj1 => obj1.colors);

let newArr = Object.values(obj).map(obj1 => obj1.colors).map(arr => {
  return arr.map(str => str[0].toUpperCase() + str.slice(1));
});

let newArr1 = Object.values(obj).map(obj2 => obj2.size).map(str => str.toUpperCase());

let finalArray = newArr.concat(newArr1);

console.log(finalArray);
