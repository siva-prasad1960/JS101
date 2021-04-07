// define a function <name> with one parameter.
// function body - concatenate strings in the array.

// Formal pseudocode
// START.
// SET - variable, varianble value -  readline-sync objcet.
// SET - empty list.
// SET and GET - (GET) user inputs to the variables (SET).
// READ - append user inputs to empty list or array.
// Function declaration with one parameeter ( list or array).
/* Function body - code for concatenating the values or elements in the argumnents
 as parameter */

 let readline = require('readline-sync');

 let words = [];

 let words1 = readline.question("What's the first word?\n");

 let words2 = readline.question("What's the second word?\n");

 words.push(words1);
 words.push(words2);

 console.log(words);

 let concat_names = '';

 function string_concat(names) {
    for (let i = 0; i < names.length; i++) {
      concat_names += names[i];
    }
    return concat_names;
 };
 
 console.log(string_concat(words));

