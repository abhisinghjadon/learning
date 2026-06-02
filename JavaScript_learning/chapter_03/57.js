// Program 57: Find the diagonal sum of a square matrix.
let arr = [
  [1, 2, 7],
  [3, 4, 7],
  [5, 6, 7],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i == j) {
      sum += arr[i][j];
    }
  }
}
console.log(`Diagonal Element sum is ${sum} of Matrix`);
