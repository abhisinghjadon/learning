//Program 4: Find the maximum of three numbers.
let num1 = Number(prompt("Enter the First Number"));
let num2 = Number(prompt("Enter the Second Number"));
let num3 = Number(prompt("Enter the Third Number"));
if (num1 > num2) {
  if (num1 > num3) {
    alert(`${num1} is greater than among All`);
  } else {
    alert(`${num3} is greater than among All`);
  }
} else {
  if (num2 > num3) {
    alert(`${num2} is greater than among All`);
  } else {
    alert(`${num3} is greater than among All`);
  }
}
