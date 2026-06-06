//Project 1: Click Counter: A button that increases and displays a count number on screen when clicked.
let count = 0;
function increment() {
  count++;
  //console.log(`Clicked ${count}`);
  document.getElementById("counter-display").textContent = count;
}
