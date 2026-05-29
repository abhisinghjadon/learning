//Program 14: Print a pyramid pattern of stars.
//for browser
let lines = Number(prompt("Enter the Number of Lines in Pattern"));
//let lines = 8;
for (let i = 1; i <= lines; i++) {
  let str = "";
  for (let j = lines; j > i; j--) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}
