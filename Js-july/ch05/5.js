
// Program 80: Create a function that uses Rest Parameters to sum any number of arguments.
function sum(...num) {
  let total = 0;
  num.forEach((element) => {
    total += element;
  });
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
