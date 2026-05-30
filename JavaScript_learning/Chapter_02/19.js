//Program 19: Find the length of a string without using the .length property.
//for Browser
//let str = prompt("Enter the string");
let str = "Hello";
let count = 0;
let i = 0;

while (str[i] !== undefined) {
  count++;
  i++;
}

console.log("Length is:", count);
