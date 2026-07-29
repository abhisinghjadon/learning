// Program 4: Find the maximum of three numbers.
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the First Number:"));
const num2 = Number(prompt("Enter the Second Number:"));
const num3 = Number(prompt("Enter the Third Number:"));
let max = num1;
if (num2 > max) max = num2;
if (num3 > max) max = num3;

const max = max1 > max2 ? max1 : max2;
console.log(max);
