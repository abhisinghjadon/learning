//Program 9: Check if a number is a Prime number.
//for brower
// let number = Number(prompt("Enter the Number"));
let number = 4;
let check = false;
if (number <= 0) {
  console.log(
    `You are enter ${number} is Less than 1,\n${number} is not a Prime Number Because it have infinite divisors`,
  );
} else if (number == 1) {
  console.log(
    "1 is not a Prime Number Beacause Prime numbers must be greater than 1 and 1 only has one divisor",
  );
} else {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      check = true;
      break;
    }
  }
  if (!check) {
    console.log(`${number} is a Prime Number`);
  } else {
    console.log(`${number} is NOT a Prime Number`);
  }
}
