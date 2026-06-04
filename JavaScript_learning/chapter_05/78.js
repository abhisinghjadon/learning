// Program 78: Create a function that returns another function (Higher-Order Function concept).

/**
 Notes 
 Higher-Order Function: Any function that takes another function as an argument, or returns a function, is a Higher-Order Function. Here, createMultiplier is the higher-order function.
 */

// Higher-Order Function: Yeh function ek naya function bana kar return karega
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// 'double' ke andar ab ek function hai jisme factor = 2 locked hai
const double = createMultiplier(2);

// 'triple' ke andar ek function hai jisme factor = 3 locked hai
const triple = createMultiplier(3);

//use of tghis functions

const result1 = double(5);
console.log(`5 ka double: ${result1}`);

const result2 = triple(5);
console.log(`5 ka triple: ${result2}`);

const result3 = double(12);
console.log(`12 ka double: ${result3}`);
