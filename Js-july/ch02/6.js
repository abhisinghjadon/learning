
// Program 31: Convert a string to slug-case (e.g., "Hello World" -> "hello-world").

const str = "Hello world ";
let temp = str.slice(" ");
let res = "";
let val;
for (let i = 0; i < temp.length; i++) {
  val = temp[i].toLowerCase();
  if (val == " ") {
    if (i == temp.length - 1) {
      continue;
    }
    res += "-";
    continue;
  }
  res += val;
}
console.log(res);
