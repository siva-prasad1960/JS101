function utf16Value(str) {
  let arr = [];
  if (str === ' ') {
    return 0;
  } else {
    for (let index = 0; index < str.length; index++) {
      arr.push(str[index].charCodeAt());
    }
  }
  return arr.reduce((acc, sum) => acc + sum);
}

console.log(utf16Value(' '));
console.log(utf16Value('Four score'));
console.log(utf16Value('a'));
console.log(utf16Value('Launch School'));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));