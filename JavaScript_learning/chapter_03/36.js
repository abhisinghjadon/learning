//Program 36: Find the largest and smallest element in an array.
let array = [81, -56, 82, 87, 102, 81, 84];
// console.log(array);
let large = (small = array[0]);
let i = 0;
while (array[i] != undefined) {
  if (array[i] > large) {
    large = array[i];
  }
  if (array[i] < small) {
    small = array[i];
  }
  i++;
}
console.log(`${small} is a Samllest Number and ${large} is a Largest Number `);
