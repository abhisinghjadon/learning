/**
 * Program 111: Adding CSS Classes
Task: Define a CSS class in your stylesheet. Add this class to an element dynamically on user interaction using classList.add().
Syntax Focus: element.classList.add().
 */

function active() {
  const box = document.getElementById("box");
  box.classList.add("active");
}
