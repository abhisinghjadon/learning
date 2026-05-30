//Program 22: Count the occurrences of a specific character in a string.
//for Browser
let str = prompt("Enter the string");
let targetChar = prompt("Enter a specific character");
// let str = "javascript";
// let targetChar = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === targetChar) {
    count++;
  }
}

console.log(`Character '${targetChar}' found ${count} times.`);
