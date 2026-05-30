//Program 20: Convert the first letter of each word in a sentence to uppercase.
//for Browser
//let str = prompt("Enter the string");
let str = "hello";
let words = str.split(" "); //word ko todega

for (let i = 0; i < words.length; i++) {
  //i=word number
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");
console.log(result);
