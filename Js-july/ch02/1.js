// Program 16: Reverse a string without using built-in methods (like .reverse()).
let str = "Abhishek";

//let revstr = str.split("").reverse().join("");
let revstr = "";
for (let i = 0; i < str.length; i++) {
  revstr += str[str.length - 1 - i];
}
console.log(revstr);
