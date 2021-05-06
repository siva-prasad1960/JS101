let words = ['go', 'ahead', 'and', 'jump'];

let wordsLengthArr = words.slice();

wordsLengthArr.sort((word1, word2) => word1.length - word2.length);

console.log(wordsLengthArr);

