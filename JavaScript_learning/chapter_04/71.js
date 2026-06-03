// Program 71: Create a ES6 Class called 'Rectangle' with methods to calculate area and perimeter.

//old/traditional way
/*

function Rectangle(length, width) {
  this.length = length;
  this.width = width;

  //method
  this.area = function () {
    console.log(`Area of ractangle is ${this.length * this.width}`);
  };
  this.perimeter = function () {
    console.log(`Perimeter of ractangle is ${2 * (this.length + this.width)}`);
  };
}

const rect = new Rectangle(10, 20);
rect.perimeter();
rect.area();


*/

//modern class way
class demo {
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

const rect2 = new demo(10, 20);
rect2.area();
