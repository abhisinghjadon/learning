// Program 62: Add, delete, and update properties of an existing object.
let car = {
  name: "thar",
  brand: "mahindra",
  model: "Petrol",
  year: "2026",
};

// Add

car.owner = "Abhishek";

// update

car.year = "2025";

//delete
delete car.brand;

console.log(car);
