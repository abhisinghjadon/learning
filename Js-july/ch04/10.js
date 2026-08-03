// Program 70: Convert an object into an array of its key-value pairs.
const car = {
  name: "thar",
  brand: "mahindra",
  model: "Petrol",
  year: "2026",
};

let arr = [];

// for (const key in car) {
//   if (!Object.hasOwn(car, key)) continue;

//   let element = key + "-" + car[key];

//   arr.push(element);
// }

//modern

arr = Object.entries(car);

console.log(arr);
