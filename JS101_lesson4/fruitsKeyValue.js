/* eslint-disable max-len */
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// function selectFruit(produce) {
//   let keyValueEntries = [];
//   let produceEntries = Object.entries(produce);
//   for (let outerCounter = 0; outerCounter < produceEntries.length; outerCounter++) {
//     for (let innerCounter = 1; innerCounter < produceEntries[outerCounter].length; innerCounter++) {
//       if (produceEntries[outerCounter][innerCounter] === 'Fruit') {
//         keyValueEntries.push(produceEntries[outerCounter]);
//       }
//     }
//   }
//   return keyValueEntries;
// }

// console.log(selectFruit(produce));

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

console.log(selectFruit(produce));