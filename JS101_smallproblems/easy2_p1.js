function greetings(arr, obj) {
  return (`Hello, ${arr.join(' ')}! Nice to have a ${Object.values(obj)[0]} ${Object.values(obj)[1]} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);