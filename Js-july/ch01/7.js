// Program 11: Reverse a given number (e.g., 1234 -> 4321).
const prompt = require("prompt-sync")();
const num1 = Number(prompt("Enter the Number : "));

let temp = num1;
let rev = 0;
while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log(`${num1} -> ${rev}`);
