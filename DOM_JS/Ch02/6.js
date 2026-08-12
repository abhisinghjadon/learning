/**
 * Program 116: Accordion Component
Task: Build a collapsible accordion item. Clicking the header should toggle an .active class to reveal or hide the panel content.
Syntax Focus: Event handling, Class toggling, DOM traversal.

 */

const box = document.getElementById("cont");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  box.classList.toggle("hide");
  if (box.classList.contains("hide")) {
    btn.innerText = "Open Box";
  } else {
    btn.innerText = "Close Box";
  }
});
