// Program 47: Filter out all odd numbers from an array using .filter().
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = data.filter((x) => x % 2 != 0);
let even = data.filter((x) => x % 2 == 0);
console.log(odd);
console.log(even);
