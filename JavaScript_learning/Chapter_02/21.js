//Program 21: Check if two strings are Anagrams of each other.
//by browser
let str1 = prompt("Enter the First string");
let str2 = prompt("Enter the Second String");
// let str1 = "listen";
// let str2 = "silent";
if (str1.length === str2.length) {
  // Split -> Sort -> Join
  let s1 = str1.toLowerCase().split("").sort().join("");
  let s2 = str2.toLowerCase().split("").sort().join("");

  if (s1 == s2) {
    console.log(`${str1} and ${str2} are Anagrams of each other `);
  } else {
    console.log(`${str1} and ${str2} are not Anagrams of each other `);
  }
} else {
  console.log(`${str1} and ${str2} are not Anagrams of each other `);
}
