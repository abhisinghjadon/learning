// Program 33: Repeat a given string N times without using .repeat().
//for browser
//let str=prompt("Enter String")
//let repeat=Number(prompt("Enter number of times repeat string "))
let str = "a";
let repeat = 0;
let print = "";
for (let i = 1; i <= repeat; i++) {
  print += str;
}
if (repeat > 0) {
  console.log(print);
} else {
  console.log(str);
}
