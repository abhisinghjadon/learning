// Program 35: Count the total number of words in a paragraph sentence.
//for browser
let sentence = prompt("Enter String");
// let sentence = "This is my last program of js Chapter 2";
let wordArray = sentence.trim().split(" ");
console.log(` ${sentence} have ${wordArray.length} words`);
