function logInBox(string) {
  console.log('--'.padStart((string.length + 4), '-'));
  console.log('|','|'.padStart((string.length + 2), ' '));
  if (string.length === 0) {
    console.log('|', '|'.padStart((string.length - 2), ' '));
  } else {
    console.log('|',(string + '|').padStart((string.length + 2), ' '));
  }
  console.log('|','|'.padStart((string.length + 2), ' '));
  console.log('--'.padStart((string.length + 4), '-'));
}

logInBox('');
logInBox('To boldly go where no one has gone before.');