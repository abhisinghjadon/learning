//Program 15: Swap two variables without using a third temporary variable.
// for browser
//let num1 = Number(prompt("Enter the First Number"));
//let num2 = Number(prompt("Enter the Second Number"));
let num1 = 5;
let num2 = 10;
console.log(`Number 1 is ${num1} and Number 2 is ${num2}`);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(`Afer Swapping Number 1 is ${num1} and Number 2 is ${num2} `);
