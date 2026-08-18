/**
 * Program 141: Form Submission Handling
Task: Intercept a form's submit event using e.preventDefault(), extract all input values, and display them in a summary div without refreshing the page.
Syntax Focus: submit event, e.preventDefault(), FormData.
 */

// const intro = document.getElementById("intro");
const user = document.getElementById("data");
const form = document.querySelector("form");

user.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let summary = "";

  for (const [key, value] of formData.entries()) {
    summary += `${key}: ${value.toString().trim()}\n`;
  }

  user.innerText = summary;
  user.style.display = "block";
  form.reset();
});
