/**
 * Program 126: Mouse Coordinate Tracking
Task: Track mouse cursor movement across a container and display the real-time  and  coordinates (e.clientX, e.clientY).
Syntax Focus: mousemove event, e.clientX, e.clientY.
 */
const box = document.getElementById("cont");
const x = document.getElementById("x");
const y = document.getElementById("y");

box.addEventListener("mousemove", (e) => {
  x.innerText = e.clientX;
  y.innerText = e.clientY;
});
