
// Program 32: Find the longest word in a sentence.
const str = "hello ham to badiya hai aap sunao";
let words = str.split(" ");
let largestWord = words[0];
for (let i = 0; i < words.length; i++) {
  if (largestWord.length < words[i].length) {
    largestWord = words[i];
  }
}
console.log(`${largestWord} and its length is ${largestWord.length}`);
