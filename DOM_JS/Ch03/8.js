/**
 * Syntax Focus: State variables, Text updates, Conditional styling.
Program 128: Live Character Counter with Limit
Task: Build a character counter for a <textarea> that displays remaining characters (e.g., "45/100 characters left") and turns red when the limit is reached.
 */
const inp = document.getElementById("input");
const display = document.getElementById("val");
const limit = 100;

display.innerText = 0;

inp.addEventListener("input", () => {
  if (inp.value.length > limit) {
    inp.value = inp.value.slice(0, limit);
    alert("No More Character left");
    display.style.color = "red";
  }

  const curlength = inp.value.length;
  display.innerText = curlength;
  if (curlength < limit) {
    display.style.color = "black";
  }
});
