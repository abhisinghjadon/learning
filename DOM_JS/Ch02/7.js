/**
 * Program 117: Font-Size Controller via Range Slider
Task: Use an <input type="range"> element to adjust the font size of a target paragraph dynamically based on the slider's value.
Syntax Focus: input event, CSS unit concatenation (px).

 */

const age = document.getElementById("age");
const value = document.getElementById("value");
value.innerText = age.value;
age.addEventListener("input", () => {
  value.innerText = age.value;
});
