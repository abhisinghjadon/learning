//Program 10: Print all prime numbers between 1 and 100.

let number = 100;
let check;
for (let j = 2; j <= 100; j++) {
  check = false;

  for (let i = 2; i <= j / 2; i++) {
    if (j % i == 0) {
      check = true;
      break;
    }
  }

  if (!check) {
    console.log(j);
  }
}
