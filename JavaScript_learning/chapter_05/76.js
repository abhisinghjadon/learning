// Program 76: Write a basic function declaration, function expression, and arrow function.
// --- 1. FUNCTION DECLARATION ---
function greetDeclaration(name) {
  return `Hello ${name} from Function Declaration!`;
}

// --- 2. FUNCTION EXPRESSION ---
const greetExpression = function (name) {
  return `Hello ${name} from Function Expression!`;
};

// --- 3. ARROW FUNCTION (ES6+) ---
const greetArrow = (name) => `Hello ${name} from Arrow Function!`;

console.log(greetDeclaration("Abhishek")); // Output: Hello Abhishek from Function Declaration!
console.log(greetExpression("Abhishek")); // Output: Hello Abhishek from Function Expression!
console.log(greetArrow("Abhishek")); // Output: Hello Abhishek from Arrow Function!
