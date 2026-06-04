// Program 77: Write a function that accepts a callback function and executes it.

// 1. Ek simple function jo callback accept karega
function process(name, callback) {
  console.log(`Processing data for: ${name}...`);
  callback(name);
}

function sayHello(userName) {
  console.log(`Hello ${userName}! Welcome aboard.`);
}

function sayGoodbye(userName) {
  console.log(`Goodbye ${userName}! See you later.`);
}

// --- Functions ko run karke dekhte hain ---

// function pass karte waqt parenthesis '()' nahi lagate, sirf naam likhte hain
process("Abhishek", sayHello);

// Processing data for: Abhishek...
// Hello Abhishek! Welcome aboard.

console.log("------------------------");

process("Abhishek", sayGoodbye);
// Output:
// Processing data for: Abhishek...
// Goodbye Abhishek! See you later.
