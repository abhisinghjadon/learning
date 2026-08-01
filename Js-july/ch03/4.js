// Program 46: Find the second largest number in an array.
const data = [10, 100, 50]; // [2, 85, 9, 1, 741, 74, 91, 54, 55];

let largest, secondlargest;
//largest = Math.max(...data);
secondlargest = data[0];
largest = data[0];
let val, temp;
for (let i = 0; i < data.length; i++) {
  val = data[i];
  if (val > largest) {
    secondlargest = largest;
    largest = val;
  }

  if (secondlargest < val && val != largest) {
    secondlargest = val;
  }
}

console.log(secondlargest);
