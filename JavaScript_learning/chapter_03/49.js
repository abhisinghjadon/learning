// Program 49: Find the sum of an array using .reduce().
let arr = [1, 5, 9, 4, 10, 8, 12];

// .reduce() takes an accumulator (acc) and the current value (curr)
let totalSum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(totalSum);
/*
acc (Accumulator): This is like a running total bucket that stores the sum accumulated so far.

curr (Current Value): The current element of the array being processed.

The Initial Value (0): This is the starting value of your accumulator. Always set this to 0 when calculating sums.*/
