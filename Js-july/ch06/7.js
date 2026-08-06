// Program 82: Write a recursive function to find the nth Fibonacci number.

function fibo(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * fibo(num - 1);
}

console.log(` Factorial of 5 is ${fibo(5)}`);
