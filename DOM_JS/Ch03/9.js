/**
 * Syntax Focus: input event, String length evaluation.
Program 129: Password Visibility Toggle
Task: Add an "Eye" icon or checkbox next to a password field. Toggle the input field's type attribute between password and text.
Syntax Focus: Attribute manipulation (type).
 */
const btn = document.getElementById("btn");
const pass = document.getElementById("pass");
btn.addEventListener("click", () => {
  if (btn.innerText == "Show") {
    pass.setAttribute("type", "text");
    btn.innerText = "Hide";
  } else {
    pass.setAttribute("type", "password");
    btn.innerText = "Show";
  }
});
