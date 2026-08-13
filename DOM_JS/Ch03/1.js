/**
 * Program 121: Standard Click Event Binding
Task: Attach an explicit event listener to a button using addEventListener('click') to log a confirmation message.
Syntax Focus: element.addEventListener().
 */
const printMess = document.getElementById("mess");
const greetings = [
  "Hello, how are you today?",
  "Good morning, I hope you have a great day!",
  "Hi there, it's nice to see you.",
  "Hey, what's up?",
  "Good afternoon, how is everything going?",
  "Greetings! Welcome to our community.",
  "Good evening, hope you had a productive day.",
  "Howdy! How have you been?",
  "It's a pleasure to meet you.",
  "Long time no see, how have you been keeping?",
];
document.getElementById("button").addEventListener("click", () => {
  let index = Math.random() * 10;
  index = Math.floor(index);
  printMess.innerText = greetings[index];
  console.log(greetings[index]);
});
