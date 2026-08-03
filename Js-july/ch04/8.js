
// Program 68: Count the number of properties present in an object.
const car = {
  name: "thar",
  brand: "mahindra",
  model: "Petrol",
  year: "2026",
};
let property = 0;

// for (const key in car) {
//   if (!Object.hasOwn(car, key)) continue;

//   property++;
// }
//modern
const propertyCount = Object.keys(car).length;
console.log(property);
