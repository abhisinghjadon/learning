// Program 78: Create a function that returns another function (Higher-Order Function concept).
function intimul(num1) {
  return function Multi(num2) {
    return num1 * num2;
  };
}
