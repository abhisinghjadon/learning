// Program 51: Check if an array contains a specific element without using .includes().
let arr = [1, 2, 3, 4, 5, 6];
let target = 50;
let isFound;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    isFound = true;
    break;
  }
}
if (isFound) {
  console.log("Specific Element is Found!...");
} else {
  console.log("Element NOT Found!...");
}

//optimized code 
/*
        if (arr.indexOf(target) !== -1) {
        console.log("Specific Element is Found!...");
        } else {
        console.log("Element NOT Found!...");
        }
*/
