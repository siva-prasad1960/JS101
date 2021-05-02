let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let petNames = Object.keys(numberOfPets);

let counter = 0;

while (counter < petNames.length) {
  console.log(`I have ${numberOfPets[petNames[counter]]} ${petNames[counter]}!`);
  counter += 1;
}