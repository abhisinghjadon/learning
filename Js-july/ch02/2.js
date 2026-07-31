// Program 17: Check if a given string is a Palindrome.
const str = "haeh";

let rev = str.split("").reverse().join("");

if (rev === str) {
  console.log("string is Palindrome");
} else {
  console.log("string is NOT  Palindrome");
}
