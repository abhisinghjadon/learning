// Program 74: Implement a static method inside a utility class.
class math {
  static findMax(num1, num2) {
    if (num1 > num2) return num1;
    else return num2;
  }
}

const max = math.findMax(45, 25);
console.log("The Maximum Number is " + max);

//notes
/*
    No Instantiation: You don't write myUtility = new MathUtility(). Static methods are called directly on the class name: MathUtility.findMax()
*/
