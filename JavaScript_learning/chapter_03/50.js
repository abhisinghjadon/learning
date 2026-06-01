// Program 50: Flatten a nested multi-dimensional array (e.g., [[1, 2], [3, 4]] -> [1, 2, 3, 4]).
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let merge = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    merge.push(arr[i][j]);
  }
}
console.log(merge);
