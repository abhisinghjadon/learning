//Program 12: Check if a number is an Armstrong number.
//for browser
//let number = Number(prompt("Enter the Number for find is an Armstrong number OR Not"));
let number = 121;
let rev = 0;
let temp = number;
let rem;
while (temp > 0) {
  rem = temp % 10;
  rev = rev * 10 + rem;
  temp = Math.floor(temp / 10);
}
if (rev == number) {
  console.log(`${number}  is an Armstrong number.`);
} else {
  console.log(`${number}  is NOT an Armstrong number.`);
}
