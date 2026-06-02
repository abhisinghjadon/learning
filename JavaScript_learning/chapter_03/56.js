// Program 56: Calculate the transpose of a 2D matrix.
let str = "";
let arr = [
  [1, 2, 7],
  [3, 4, 7],
  [5, 6, 7],
];
let transpose = [];
for (let i = 0; i < 3; i++) {
  transpose[i] = [];
  for (let j = 0; j < 3; j++) {
    transpose[i][j] = arr[j][i];
    str += transpose[i][j] + " ";
  }
  str += "\n";
}
console.log(str);
