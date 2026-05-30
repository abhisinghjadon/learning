// Program 25: Extract a substring from a string given start and end indices.
// for browser
let str = prompt("Enter string");
let total_char = str.length;
let a = Number(prompt("Enter the starting point")) - 1;
let b = Number(prompt(`Enter the ending point must leaser than ${total_char}`));
/*slice fuunction me a include hai jabki b exclude hai isliye a ko -1 diya kiyoki user 
0 se nhi 1 se start kare */
// let str = "hello";
// let a = 1;
// let b = 5;
if (b > str.length) {
  console.log("Your enter parameter is Wrong \nPlease enter correct Parameter");
} else {
  let sub = str.slice(a, b);
  console.log(sub);
}
