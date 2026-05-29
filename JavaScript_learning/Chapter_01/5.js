//Program 5: Check if a year is a leap year.

//By browser
// let year = Number(prompt("Enter the Year"));
let year = 2024;
if (year % 4 == 0) {
  if (year % 400 == 0) {
    console.log(`${year} is  a Leap Year`);
  } else if (year % 400 != 0 && year % 100 == 0) {
    console.log(`${year} is not a Leap Year`);
  } else {
    console.log(`${year} is  a Leap Year`);
  }
} else {
  console.log(`${year} is not a Leap Year`);
}
