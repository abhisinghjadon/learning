// Program 41:  duplicate items from an array.
let arr = [1, 5, 8, 6, 5, 8, 2, 1, 2];
let dup = [];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  // Agar element naye array me pehle se nahi hai, toh hi push karo
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  } else {
    dup.push(arr[i]);
  }
}
console.log(`Duplicate  Elements  is ${dup} in your Array ${arr}`);
