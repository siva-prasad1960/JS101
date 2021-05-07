let arr = ['10', '11', '9', '7', '8'];

let newArr = arr.slice();

console.log(newArr.sort((a, b) => Number(b) - Number(a)));

console.log(newArr);
console.log(arr);
