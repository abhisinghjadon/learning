//Program 6: Generate multiplication table for a given number using a loop.

//for browser
let number = Number(prompt("Enter the Number for Print table"));
// let number = 4;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}
