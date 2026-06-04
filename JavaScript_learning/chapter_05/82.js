// Program 82: Write a recursive function to find the nth Fibonacci number.
function fab(number) {
  if (number <= 0) return 0;
  if (number === 1) return 1;
  else return fab(number - 1) + fab(number - 2);
}
console.log(fab(21));
