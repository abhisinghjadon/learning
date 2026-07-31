
// Program 20: Convert the first letter of each word in a sentence to uppercase.

const str = "This is my first sentence";
let temp = str.split(" ");
let val;
for (let i = 0; i < temp.length; i++) {
  temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
}
console.log(temp.join(" "));
