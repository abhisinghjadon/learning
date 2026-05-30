// Program 26: Check if a string starts with or ends with a specific substring.
// for browser
//let str=prompt("Enter string")
//let substr=prompt("Enter Sub string")
let str = "hello";
let substr = "he";
if (str.startsWith(substr)) {
  console.log(`${substr} is present in starting of ${str}`);
} else if (str.endsWith(substr)) {
  console.log(`${substr} is present in ending of ${str}`);
} else {
  console.log(`${substr} is NOT present in Starting and Ending of ${str}`);
}
