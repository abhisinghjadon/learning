// Program 81: Set default parameter values for a function and test it.
//assume second number 1 and third Number 2 always when value not Pass
function total(num1, num2 = 1, num3 = 2) {
  return num1 + num2 + num3;
}

console.log(total(10));
console.log(total(10, 20));
console.log(total(10, 20, 30));
