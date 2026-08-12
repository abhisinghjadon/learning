/**.
 * Program 118: Live Background Color Picker
Task: Bind an <input type="color"> element to the background color of the webpage so that changes apply immediately.
Syntax Focus: change / input events, document.body.style.backgroundColor.

 */

const inp = document.getElementById("color");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = inp.value;
});
