// Program 44: Find the union of two arrays.
let arr1 = [1, 5, 7, 9, 5, 6, 7, 1, 5, 11, 56, 9, 8];
let arr2 = [8, 7, 89, 5, 1, 2, 3, 4, 5, 7, 6, 8, 7, 4, 1];
let merge = [];
for (let i = 0; i < arr1.length; i++) {
  if (!merge.includes(arr1[i])) {
    merge.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (!merge.includes(arr2[i])) {
    merge.push(arr2[i]);
  }
}
merge.sort((a, b) => a - b);

console.log(merge);
