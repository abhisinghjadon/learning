// Program 15: Swap two variables without using a third temporary variable.

const prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter the First Number : "));
let num2 = Number(prompt("Enter the Second Number : "));

console.log("Before Swapping");
console.log(`First Number ${num1}`);
console.log(`Second Number ${num2}`);

// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;

//modern swap
[num1, num2] = [num2, num1];

console.log("");
console.log("After Swapping");
console.log(`First Number ${num1}`);
console.log(`Second Number ${num2}`);
