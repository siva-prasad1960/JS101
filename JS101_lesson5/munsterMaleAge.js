let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


let maleAgeObj = Object.values(munsters).filter((obj) => obj.gender === 'male');

let maleAge = maleAgeObj.map((obj1) => {
  return obj1.age;
});

let totalAge = maleAge.reduce((acc, value) => acc + value);

console.log(`Total age of munster family's males is: ${totalAge}`);