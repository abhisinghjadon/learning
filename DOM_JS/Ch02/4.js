// Program 114: Inspecting Class Existence
// Task: Check whether an element contains a specific class using classList.contains() and display a conditional message based on the result.
// Syntax Focus: element.classList.contains().
const disp = document.body;
const btn = document.getElementById("button");
const text = document.getElementById("textdis");

text.innerText = "Light Mode Enable";

function mode() {
  disp.classList.toggle("dark");
  if (disp.classList.contains("dark")) {
    btn.innerText = "Light";
    text.innerText = "Dark Mode Enable";
  } else {
    btn.innerText = "Dark";
    text.innerText = "Light Mode Enable";
  }
}
