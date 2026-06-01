// Program 45: Rotate an array to the left by K positions.
let arr = [1, 2, 3, 4, 5, 6];
let k = 2;
let right_part = arr.slice(k, arr.length);
let left_part = arr.slice(0, k);
// "Combine" them together
const result = [...right_part, ...left_part];

console.log(result);
