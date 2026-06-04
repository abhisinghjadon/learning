// Program 80: Create a function that uses Rest Parameters to sum any number of arguments.

// Function uses '...' to collect all incoming arguments into a single array named 'numbers'
function sumAll(...numbers) {
  let total = 0;
  numbers.forEach((element) => {
    total += element;
  });
  return total;
}

const result1 = sumAll(5, 10, 15);
console.log(result1);
