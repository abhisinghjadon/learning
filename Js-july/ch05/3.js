// Program 78: Create a function that returns another function (Higher-Order Function concept).
function intimul(num1) {
  return function Multi(num2) {
    return num1 * num2;
  };
}

const mul1 = intimul(5);
console.log(mul1(3));
