// Program 67: Convert an object into a JSON string and vice versa.
const car = {
  name: "thar",
  brand: "mahindra",
  model: "Petrol",
  year: "2026",
};

const str = JSON.stringify(car);
const str2 =
  '{"id":101,"name":"Abhishek","skills":["JavaScript","PHP"],"isActive":true}';

const data1 = JSON.parse(str2);
console.log(str);
console.log(data1);
