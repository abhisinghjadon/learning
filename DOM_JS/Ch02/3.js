/**
 * Program 113: Dark / Light Mode Toggle
Task: Implement a theme toggle button that switches the <body> class between dark-theme and light-theme using classList.toggle().
Syntax Focus: element.classList.toggle().

 */

function mode() {
  const disp = document.body;
  const btn = document.getElementById("button");

  disp.classList.toggle("dark");
  if (disp.classList.contains("dark")) {
    btn.innerText = "Light";
  } else {
    btn.innerText = "Dark";
  }
}
