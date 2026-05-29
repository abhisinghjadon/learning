//Program 13: Print a right-angled triangle pattern of stars (*).
//for browser
//let lines = Number(prompt("Enter the Number of Lines in Pattern"));
let lines = 10;
for (let i = 1; i <= lines; i++) {
  let str = ""; // blank string
  for (let j = 1; j <= i; j++) {
    str += "*"; // add stars
  }

  console.log(str); //line print
}
