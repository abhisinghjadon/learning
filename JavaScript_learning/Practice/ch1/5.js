// Program 7: Calculate the factorial of a number using a for loop.

const prompt = require("prompt-sync")();

const number = Number(prompt("Enter the number for Finding Factorial :"));

let result = 1;
for (let i = number; i > 1; i--) {
  result = result * i;
}

console.log(`Result of ${number} factorial is ${result}`);
