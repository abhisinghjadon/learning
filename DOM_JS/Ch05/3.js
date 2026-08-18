/**
 * Program 143: Event Delegation Pattern (CRITICAL)
Task: Attach a single click listener to a parent <ul> element. Use e.target and .matches() to handle click events dynamically for current children.
Syntax Focus: Event Delegation, e.target, element.matches().
 */

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("Clicked Element:", e.target);
    console.log("Item Text:", e.target.textContent.trim());
  }
});
