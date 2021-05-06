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

// one way
console.log(agesValues.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) {
    accumulator = currentValue;
  }
  return accumulator;
}));

// different way
console.log(Math.min(...agesValues));