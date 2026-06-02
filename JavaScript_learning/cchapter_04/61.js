// Program 61: Create a basic object representing a Car with properties like brand, model, and year.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Toyota", "Fortuner", 2026);

console.log(`Car Details: ${myCar.year} ${myCar.brand} ${myCar.model}`);
