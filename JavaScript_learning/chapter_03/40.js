// Program 40: Implement Binary Search on a sorted array.

let arr = [1, 5, 8, 6, 11, 2];
//console.log(arr.indexOf(2));

// Array ko sort kerne ka logic

let temp;
let swap;
for (let i = 0; i < arr.length - 1; i++) {
  swap = false;

  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      swap = true;
    }
  }
  if (swap == false) break;
}
// console.log(arr);

//linear search
// for (let i = 0; i <= 5; i++) {
//   if (2 == arr[i]) {
//     console.log(i);
//   }
// }

//binary search
let low = 0;
let high = arr.length - 1;
let target = 2;
let find = false;
while (low <= high) {
  mid = Math.floor(low + (high - low) / 2);
  if (arr[mid] == target) {
    console.log(`${target} present in Array at ${mid} index `);
    find = true;
    break;
  } else if (arr[mid] > target) {
    high = mid - 1;
  } else low = mid + 1;
}
if (!find) {
  console.log(`${target} is not present in Array`);
}
