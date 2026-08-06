// Program 84: Create a function that curries a 2-argument mathematical operation.

const add = (a) => (b) => a + b;
console.log(add(10)(20));
