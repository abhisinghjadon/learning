// Program 18: Count the total number of vowels and consonants in a string.
const str = "Abhishek";
const temp = str.toLocaleLowerCase();
let vowels = 0,
  consonants = 0;
for (let i = 0; i < temp.length; i++) {
  let check = temp[i];
  if (check >= "0" && check <= "9") {
    continue;
  } else if (
    check == "a" ||
    check == "e" ||
    check == "i" ||
    check == "o" ||
    check == "u"
  ) {
    vowels++;
  } else if (check >= "a" && check <= "z") {
    consonants++;
  }
}
console.log(`${str} have ${vowels} and ${consonants}`);
