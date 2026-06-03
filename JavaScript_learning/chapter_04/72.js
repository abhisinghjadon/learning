// Program 72: Implement Inheritance: Create a 'Square' class that extends the 'Rectangle' class.
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  //method
  area() {
    console.log(`Area of ractangle is ${this.length * this.width}`);
  }
  perimeter() {
    console.log(`Perimeter of ractangle is ${2 * (this.length + this.width)}`);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const sqr = new Square(5);
sqr.area();
sqr.perimeter();
