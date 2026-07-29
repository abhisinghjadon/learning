// Program 6: Generate multiplication table for a given number using a loop.
const prompt = require("prompt-sync")();

const number = Number(prompt("Enter the number for Print Table :"));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i} `);
}
