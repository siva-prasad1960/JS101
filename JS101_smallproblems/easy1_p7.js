function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2.concat(str1).concat(str2);
  } else {
    return str1.concat(str2).concat(str1);
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log('', 'xyz');