// Program 55: Find the sum of two 2D matrices.
let str = "";
let arr1 = [
  [1, 2, 7],
  [3, 4, 7],
  [5, 6, 7],
];
let arr2 = [
  [1, 2, 7],
  [3, 4, 7],
  [5, 6, 7],
];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    str += arr1[i][j] + arr2[i][j] + "\t";
  }
  str += "\n";
}
console.log(str);
