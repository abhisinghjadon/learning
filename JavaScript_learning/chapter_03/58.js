// Program 58: Check if two arrays are completely equal in elements and order.
let arr1 = [1, 2, 3, 4];
let arr2 = [1, "2", 3, 4];
let check = true;
if (arr1.length !== arr2.length) {
  check = false;
}
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    check = false;
  }
}
if (check)
  console.log("Two arrays are completely equal in elements and order.");
else console.log("Two arrays are NOT completely equal in elements and order.");
