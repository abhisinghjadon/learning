// Program 64: Check if a specific key exists in an object.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Toyota", "Fortuner", 2026);

//method -1 ....in beacuse it Focus on KEY
if ("model" in myCar) {
  console.log("Yes, 'model' key exists!");
} else {
  console.log("No, 'model' key does not exist.");
}

//method-2 .hasOwnProperty

if (myCar.hasOwnProperty("year")) {
  console.log("Yes, 'year' key exists!");
} else {
  console.log("No, 'year' key does not exist.");
}
