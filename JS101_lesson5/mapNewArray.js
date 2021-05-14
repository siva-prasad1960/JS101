let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(element => {
  for (const key in element) {
    element[key] += 1;
  }
  return element;
});

console.log(arr);