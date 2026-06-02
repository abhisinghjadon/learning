// Program 60: Find the missing number in a given sequential array of 1 to N.
let arr = [1, 2, 4, 5, 6];
//missing number=3
let n = arr.length + 1; // N = 5 + 1 = 6

// Expected sum: (6 * 7) / 2 = 21
let expectedSum = (n * (n + 1)) / 2;

// Actual sum: 1 + 2 + 4 + 5 + 6 = 18
let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
  actualSum += arr[i];
}

// Missing number: 21 - 18 = 3
let missingNumber = expectedSum - actualSum;

console.log("Missing number is:", missingNumber); // Output: 3
