// Program 63: Loop through all keys and values of an object using for...in.
const car = {
  name: "thar",
  brand: "mahindra",
  model: ["Petrol", "Desiel"],
  year: "2026",
};

for (const key in car) {
  if (!Object.hasOwn(car, key)) continue;

  const element = car[key];

  console.log(`${key}=>${element}`);
}
