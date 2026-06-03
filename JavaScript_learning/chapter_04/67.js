// Program 67: Convert an object into a JSON string and vice versa.

//object to JSON

const user = {
  id: 101,
  name: "Abhishek",
  skills: ["JavaScript", "PHP"],
  isActive: true,
};

// Convert Object to JSON String
const jsonString = JSON.stringify(user);

console.log(jsonString);
console.log(typeof jsonString);

//JSON -> object

// (Notice the single quotes outside, double quotes inside)
const jsonResponse =
  '{"id":101,"name":"Abhishek","skills":["JavaScript","PHP"],"isActive":true}';

// Convert JSON String back to Object
const userObj = JSON.parse(jsonResponse);

console.log(userObj.name);
console.log(userObj.skills[0]);
console.log(typeof userObj);
