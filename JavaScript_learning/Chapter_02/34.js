// Program 34: Check if a string contains only digits.
//for browser
//let str=Number(prompt("Enter number string"))
let str = "0210234";
let check = true;
if (str.length === 0) console.log("Your String is Empty");
else {
  for (let char of str) {
    if (char < "0" || char > "9") {
      check = false;
    }
  }
  check
    ? console.log(`${str} have only Digits`)
    : console.log(`${str} have NOT only Digits`);
}
