/* eslint-disable max-len */
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesValues = Object.values(ages);
console.log(agesValues);

console.log(agesValues.reduce((accumulator, currentvalue) => accumulator + currentvalue));