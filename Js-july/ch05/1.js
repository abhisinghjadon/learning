
// Program 76: Write a basic function declaration, function expression, and arrow function.

//function declaration
function callTax(tax, amount) {
  return amount + amount * (tax / 100);
}

//function expression

const etax = function callTax(tax, amount) {
  return amount + amount * (tax / 100);
};

//arrow functio
const taxarrow = (tax, amount) => amount + amount * (tax / 100);

let amt = 1000;
let tax = 10;

console.log(`tax from a simple function ` + callTax(tax, amt));
console.log(`tax from a Expression function ` + etax(tax, amt));
console.log(`tax from a simple function ` + taxarrow(tax, amt));
console.log();
