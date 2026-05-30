// Program 32: Find the longest word in a sentence.
//for browser
//let sentence=prompt("Enter Sentence")

let sentence = "I am learning JavaScript";
let words = sentence.split(" ");
let longestWord = "";

for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(`In ${sentence} present Longest Word is ${longestWord}`);
