/**
 * Program 109: Real-Time Input Mirroring
Task: Capture text typed into an <input> field in real time and display it simultaneously inside an adjacent <span> or <h2>.
Syntax Focus: input event, element.value.
 */

const inp = document.getElementById("input");
const text = document.getElementById("text");
inp.addEventListener("input", () => {
  text.innerText = inp.value;
});
