//Program 17: Check if a string is a Palindrome.
//for browser
let str = prompt("Enter the word");
//let str = "aa";
const reversedWord = str.split("").reverse().join("");
if (reversedWord === str) {
  console.log("String is Palindrome");
} else {
  console.log("String is Not  Palindrome");
}
