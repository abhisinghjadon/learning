/**
 * Program 125: Input Focus & Blur Styling
Task: Change the border color of an input field when it receives focus, and validate/reset it when it loses focus (blur).
Syntax Focus: focus, blur events.
 */
const form = document.getElementById("myForm");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");

inp1.addEventListener("focus", () => {
  inp1.classList.add("focus");
});

inp1.addEventListener("blur", () => {
  inp1.classList.remove("focus");
});

inp2.addEventListener("focus", () => {
  inp2.classList.add("focus");
});

inp2.addEventListener("blur", () => {
  inp2.classList.remove("focus");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val1 = inp1.value.trim().length;
  if (val1 < 4 || val1 > 15) {
    inp1.classList.add("error");
  } else {
    inp1.classList.remove("error");
  }

  const val2 = inp2.value.trim().length;
  if (val2 < 8 || val2 > 15) {
    inp2.classList.add("error");
  } else {
    inp2.classList.remove("error");
  }
});
