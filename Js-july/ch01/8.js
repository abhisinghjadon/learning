// Program 13: Print a right-angled triangle pattern of stars (*).
const prompt = require("prompt-sync")();

const lines = Number(prompt("Enter the Number of triangle Lines :"));

for (let i = 1; i <= lines; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
