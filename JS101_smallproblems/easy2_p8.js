function oddities(arr) {
  return arr.filter((ele, index) => {
    if (index % 2 === 0) {
      return ele;
    }
  });
}

console.log(oddities([]));
console.log(oddities([123]));
console.log(oddities(["abc", 'def']));
console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));