//Program 18: Count the number of vowels and consonants in a string.
//for Browser
let sentence = prompt("Enter the string");
//let sentence = "Apple";
let total_vowel = 0;
total_consonant = 0;
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i].toLowerCase();

  //skip auto space and symbols
  if (char >= "a" && char <= "z") {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char + " is a Vowel");
      total_vowel++;
    } else {
      console.log(char + " is a Consonant");
      total_consonant++;
    }
  }
}
console.log(
  `In your word ${sentence} in present ${total_vowel} vowels and ${total_consonant} consonant`,
);
