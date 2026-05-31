// Program 39: Sort an array of numbers in ascending order using Bubble Sort.
let arr = [5, 97, 56, 12, 23, 10, 14];
let arr_length = arr.length;
let temp;
let swap;
for (let i = 0; i < arr_length - 1; i++) {
  swap = false;

  for (let j = 0; j < arr_length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      swap = true;
    }
  }
  if (swap == false) break;
}
console.log(arr);
