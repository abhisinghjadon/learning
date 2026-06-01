// Program 46: Find the second largest number in an array.
let arr = [1, 5, 9, 4, 10, 8, 12];
let large = arr[0],
  slarge = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > large) {
    slarge = large;
    large = arr[i];
  } else if (arr[i] > slarge && arr[i] !== large) {
    slarge = arr[i];
  }
}
console.log(slarge);
