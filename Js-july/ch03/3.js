
// Program 41: Remove duplicate items from an array (bina new Set() ke).
// let data = [1, 5, 5, 1, 8, 15, 6, 5, 78, 71, 21];
// let remove = [];
// let temp = [...data];

// for (let i = 0; i < temp.length; i++) {
//   for (let j = i + 1; j < temp.length; j++) {
//     if (temp[i] === temp[j]) {
//       if (!remove.includes(temp[j])) {
//         remove.push(temp[j]);
//       }
//       temp = [...temp.slice(0, j), ...temp.slice(j + 1)];
//       j--;
//     }
//   }
// }

// console.log("Unique Array :", temp);
// console.log("Removed Duplicates:", remove);

let data = [1, 5, 5, 1, 8, 15, 6, 5, 78, 71, 21];
let unique = [];

for (let i = 0; i < data.length; i++) {
  if (!unique.includes(data[i])) {
    unique.push(data[i]);
  }
}
console.log("Unique Array:", unique);
