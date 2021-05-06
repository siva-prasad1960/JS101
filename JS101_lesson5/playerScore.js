let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  return a.reduce((acc, value) => acc + value) - b.reduce((acc, value) => acc + value);
});

console.log(scores);