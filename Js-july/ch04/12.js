// Program 72: Implement Inheritance: Create a 'Square' class that extends the 'Rectangle' class.
class Rectangle {
  constructor(length, square = false, width = 0) {
    this.length = length;
    this.width = width;
    this.isSquare = square;
  }

  area() {
    let len = this.length;
    if (this.isSquare) {
      let area = len * len;
      console.log(`Area of Square is ${area} where Length is ${len} `);
      return;
    }

    let wid = this.width;
    let area = len * wid;
    console.log(
      `Area of rectangle is ${area} where Length is ${len} and Width is ${wid}`,
    );
  }

  perimeter() {
    let len = this.length;
    if (this.isSquare) {
      let peri = 4 * len;
      console.log(`Perimeter of Square is ${peri} where Length is ${len} `);
      return;
    }
    let wid = this.width;
    let peri = 2 * (len + wid);

    console.log(
      `Perimeter of rectangle is ${peri} where Length is ${len} and Width is ${wid}`,
    );
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, true);
  }
  area() {
    super.area();
  }
  perimeter() {
    super.perimeter();
  }
}

const sqr = new Square(10);
sqr.area();
sqr.perimeter();
