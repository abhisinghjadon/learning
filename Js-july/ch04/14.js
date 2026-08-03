// Program 74: Implement a static method inside a utility class.
class cmath {
  static find(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
}
const max = cmath.find(14, 45);
console.log("Max is :", max);
