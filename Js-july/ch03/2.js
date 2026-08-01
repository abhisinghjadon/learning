
// Program 38: Reverse an array in-place without creating a new array.

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp;
let length = data.length;
for (let i = 0; i < length / 2; i++) {
  temp = data[length - 1 - i];
  data[length - 1 - i] = data[i];
  data[i] = temp;
}
console.log(data);
