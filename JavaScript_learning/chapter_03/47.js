// Program 47: Filter out all odd numbers from an array using .filter().
let arr = [1, 5, 9, 4, 10, 8, 12];

// Ekdam direct aur simple:
let evenNumbers = arr.filter((num) => num % 2 != 0);

console.log(evenNumbers); // Output: [4, 10, 8, 12]
