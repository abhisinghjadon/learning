// Program 81: Set default parameter values for a function and test it.
function calculateTotal(price, tax = 0.05, discount = 0) {
  const taxAmount = price * tax;
  const finalPrice = price + taxAmount - discount;
  return finalPrice;
}

const total1 = calculateTotal(100);
console.log("Total with defaults:  " + total1);

const total2 = calculateTotal(100, 0.3);
console.log("Total with custom tax: " + total2);

const total3 = calculateTotal(100, 0.08, 10);
console.log("Total with custom tax & discount: " + total3);
