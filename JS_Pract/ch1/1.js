// Program 3: Check if a number is even or odd.
const prompt = require("prompt-sync")();
const num = prompt("Enter the Number: ");

if (num % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
