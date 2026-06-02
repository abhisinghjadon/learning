// Program 63: Loop through all keys and values of an object using for...in.
class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const myCar = new Car("Toyota", "Camry", 2026, "Silver");


for (let key in myCar) {
    console.log(`${key}: ${myCar[key]}`);
}
