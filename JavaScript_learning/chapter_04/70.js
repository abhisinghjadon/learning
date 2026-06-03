// Program 70: Convert an object into an array of its key-value pairs.
const user = {
  id: 101,
  name: "Abhishek",
  role: "Developer",
  isActive: true,
};

// Convert the object to an array of key-value pairs
const keyValuePairs = Object.entries(user);

console.log(keyValuePairs);
