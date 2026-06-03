// Program 75: Create an array of objects representing products and sort them by price.
const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 15000 },
  { id: 3, name: "Headphones", price: 2500 },
  { id: 4, name: "Smartwatch", price: 4000 },
];

console.log("--- Befaore Sorting Products ---");
console.log(products);

products.sort((a, b) => a.price - b.price);

console.log("\n--- After Sorting Products (Low to High Price) ---");
console.log(products);
