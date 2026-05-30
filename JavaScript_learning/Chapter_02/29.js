// Program 29: Truncate a string and append "..." if its length exceeds a specified limit.
// for browser
// let str = prompt("Enter string");
// let limit = Number(prompt(`Limit must leaser than ${total_char}`));
// let total_char = str.length;

let str = "Abhishek Thankur Singh";
let limit = 15;
if (str.length > limit) {
  let print = str.slice(0, limit);
  print += "...";
  console.log(print);
}
