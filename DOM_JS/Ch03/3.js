/**
 * 
Program 123: Mouse Hover Effects (mouseenter & mouseleave)
Task: Implement custom hover effects on an element using mouseenter and mouseleave event listeners.
Syntax Focus: mouseenter, mouseleave.
 */
const box = document.getElementById("cont");
const all = document.getElementsByClassName("cont");

box.addEventListener("mouseenter", () => {
  Array.from(all).forEach((element) => {
    element.classList.add("hover");
  });
});

box.addEventListener("mouseleave", () => {
  Array.from(all).forEach((element) => {
    element.classList.remove("hover");
  });
});
