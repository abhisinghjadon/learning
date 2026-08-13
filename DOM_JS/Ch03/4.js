/**
 * Program 124: Keyboard Key Detection
Task: Capture keydown events globally on the window. Display the pressed key name (e.key) and code (e.code) on the screen.
Syntax Focus: KeyboardEvent object properties (e.key, e.code).
 */
const keys = document.getElementById("key");
document.addEventListener("keydown", function (event) {
  // data = `Key pressed: ${event.key},Code: ${event.code}`;
  data = "Key pressed: " + event.key + "Code: " + event.code;
  keys.innerText = data;
  console.log(data);
});
