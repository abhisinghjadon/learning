/**
 * Program 139: Utilizing insertAdjacentHTML()
Task: Inject HTML strings into a container at four distinct positions: beforebegin, afterbegin, beforeend, and afterend.
Syntax Focus: element.insertAdjacentHTML(position, text).
 */
let beforebegin = 1;
let afterbegin = 1;
let beforeend = 1;
let afterend = 1;
const box = document.getElementById("cont");
document.getElementById("beforebegin").addEventListener("click", () => {
  const Text = "I am a Beforebegin Tag " + beforebegin + "<br>";
  box.insertAdjacentHTML("beforebegin", Text);
  beforebegin++;
});

document.getElementById("afterbegin").addEventListener("click", () => {
  const Text = "I am a Afterbegin Tag " + afterbegin + "<br>";
  box.insertAdjacentHTML("afterbegin", Text);
  afterbegin++;
});
document.getElementById("beforeend").addEventListener("click", () => {
  const Text = "I am a Beforeend Tag " + beforeend + "<br>";
  box.insertAdjacentHTML("beforeend", Text);
  beforeend++;
});
document.getElementById("afterend").addEventListener("click", () => {
  const Text = "I am a Afterend Tag " + afterend + "<br>";
  box.insertAdjacentHTML("afterend", Text);
  afterend++;
});
