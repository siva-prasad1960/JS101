const readline = require('readline-sync');
const METER_SQFEET = 10.7639;

let length = Number(readline.question('Enter the length of the room in meters: '));
let height = Number(readline.question('Enter the height of the roon in meters: '));

let areaInMeters = length * height;
let areaInSqFeet = areaInMeters * METER_SQFEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInSqFeet.toFixed(2)} square feet).`);