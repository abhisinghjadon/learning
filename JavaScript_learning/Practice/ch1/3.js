// Program 5: Check if a year is a leap year.

const prompt = require("prompt-sync")();

const year = Number(prompt("Enter the Year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
