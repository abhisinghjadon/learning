// Program 49: Find the sum of an array using .reduce().
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = data.reduce((acc, current) => {
  return acc + current;
}, 0);
console.log(sum);
