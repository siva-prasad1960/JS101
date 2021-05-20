function crunch(string) {
  let arr = string.split('');
  console.log(arr);
  let newArr = [];
  arr.forEach((num, index, arr) => {
    if (arr[index] !== arr[index + 1]) {
      newArr.push(num);
    }
  });
  return newArr.join('');
}

console.log(crunch('gggggggggggg'));
console.log(crunch(''));
console.log(crunch('a'));
console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));

