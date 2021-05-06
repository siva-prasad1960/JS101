let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstonesObject = {};

flintstones.forEach((element, index) => {
  flintstonesObject[element] = index;
});

console.log(flintstonesObject);

