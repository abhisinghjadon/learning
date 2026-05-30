// Program 23: Find the first non-repeating character in a string.
// for browser
//let str=prompt("Enter string")
let str = "hello";
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    console.log("First non-repeating character is: " + char);
    break;
  }
}
