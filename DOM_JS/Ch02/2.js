/**
 * rogram 112: Removing CSS Classes
Task: Remove an active CSS class from an element using classList.remove() when a specific button is clicked.
Syntax Focus: element.classList.remove().

 */
function Remove() {
  const box = document.getElementById("box");
  box.classList.remove("active");
}
