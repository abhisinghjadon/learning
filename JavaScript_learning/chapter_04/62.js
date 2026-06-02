// Program 62: Add, delete, and update properties of an existing object.

const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022,
};

console.log("Original Object:", car);

// 1. UPDATE a property
car.year = 2024;
car["model"] = "Camry";
console.log("After Update:", car);

// 2. ADD a new property
car.color = "Red";
car.isElectric = false;
console.log("After Adding Properties:", car);

// 3. DELETE a property
delete car.isElectric;
console.log("After Deleting Property:", car);
