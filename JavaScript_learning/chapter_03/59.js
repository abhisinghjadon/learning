// Program 59: Chunk an array into smaller sub-arrays of a specified size.
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
let size = 5;
let chunk = [];

for (let i = 0; i < originalArray.length; i += size) {
  let chunk = originalArray.slice(i, i + size);
  chunk.push(chunk);
}

console.log(chunk);
