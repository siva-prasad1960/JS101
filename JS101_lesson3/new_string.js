let munstersDescription = "the Munsters are CREEPY and Spooky.";

let firstChar = munstersDescription[0].toUpperCase();

let restOfStr = munstersDescription.slice(1, munstersDescription.length).toLowerCase();

let newStr = firstChar + restOfStr;

console.log(newStr);


// precise solution.

// munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();