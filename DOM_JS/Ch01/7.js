/**
 * Program 107: Element Visibility Toggle (Inline Styles)
Task: Create a paragraph and a button. Toggle the display property of the paragraph between none and block upon clicking the button.
Syntax Focus: element.style.display.

 */

const box = document.getElementById("para");
const btn = document.getElementById("button");
btn.addEventListener("click", () => {
  if (btn.innerText == "Hide") {
    btn.innerText = "Active";
    box.style.display = "none";
  } else {
    btn.innerText = "Hide";
    box.style.display = "inline";
  }
});
