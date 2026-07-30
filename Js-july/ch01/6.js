// Program 9: Check if a number is a Prime number.

const prompt = require("prompt-sync")();
const num = Number(prompt("Enter the Prime Number : "));

let result = true;
if (num == 1 || num <= 0) {
  result = false;
} else {
  //best performance from num/2 to sqrt of num
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j == 0) {
      result = false;
      break;
    }
  }
}

if (result) {
  console.log(`${num} is a Prime Number`);
} else {
  console.log(`${num} is a NOT Prime Number`);
}
