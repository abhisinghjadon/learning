// Program 42: Merge two arrays into a single sorted array without duplicates.
let arr1 = [1, 5, 17, 89, 41];
let arr2 = [71, 89, 54, 78, 89, 74, 56];
let merge = [];

for (let i = 0; i < arr1.length; i++) {
  if (!merge.includes(arr1[i])) {
    merge.push(arr1[i]);
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (!merge.includes(arr2[i])) {
    merge.push(arr2[i]);
  }
}

// 3.array ko ascending order mein sort karein
merge.sort((a, b) => a - b);

console.log(merge);
