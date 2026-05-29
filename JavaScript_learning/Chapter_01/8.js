//Program 8: Print the Fibonacci sequence up to N terms.
//for browser
//let number = Number(prompt("Enter the Number for Print the Fibonacci sequence"));
let number = 10;
let a = 0,
  b = 1,
  c = 0;
for (let i = 1; i <= number; i++) {
  c = a + b;
  console.log(a);
  a = b;
  b = c;
}
