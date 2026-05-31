// Program 38: Reverse an array in-place without creating a new array.
let arr = [1, 2, 8, 4, 7, 9, 5];
console.log(arr);
let temp;
let j = arr.length - 1;
for (let i = 0; i <= arr.length / 2; i++, j--) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(arr);
