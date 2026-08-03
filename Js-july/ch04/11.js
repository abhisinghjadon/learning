// Program 71: Create a ES6 Class called 'Rectangle' with methods to calculate area and perimeter.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    let len = this.length;
    let wid = this.width;
    let area = len * wid;
    console.log(
      `Area of rectangle is ${area} where Length is ${len} and Width is ${wid}`,
    );
  }
  perimeter() {
    let len = this.length;
    let wid = this.width;
    let peri = 2 * (len + wid);
    console.log(
      `Perimeter of rectangle is ${peri} where Length is ${len} and Width is ${wid}`,
    );
  }
}

const rect = new Rectangle(10, 20);
rect.perimeter();
rect.area();
