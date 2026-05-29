//Program 7: Calculate the factorial of a number using a for loop.
//for browser
//let number = Number(prompt("Enter the Number for find Factorial"));
let number = 0;
let factorial = 1;
if (number < 0) {
  console.log("Number is Negative");
} else if (number == 1 || number == 0) {
  console.log(`Factorial of ${number} is 1`);
} else {
  for (let i = number; i >= 2; i--) {
    factorial = factorial * i;
  }
  console.log(`Factorial of ${number} is ${factorial}`);
}
