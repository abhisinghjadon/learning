//Program 37: Calculate the average of all numbers in an array.
let arr = [81, -56, 82, 87, 102, 81, 84];
let i,
  sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
sum = (sum / i).toFixed(2);
console.log(`Average is  ${sum}`);
