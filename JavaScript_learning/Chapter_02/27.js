// Program 27: Replace all occurrences of a word in a sentence with another word.
// for browser
//let sentence=prompt("Enter string")
//let replaceWord =prompt("Enter Sub string")

let sentence = "I love js . js is best modern language ";
let replaceWord = "Java Script";
let result = sentence.replaceAll("js", replaceWord);

console.log(result); // "I love dogs, dogs are great."
