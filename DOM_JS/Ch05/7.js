/**
Program 147: Form State Persistence with localStorage
Task: Save input field values to localStorage on change. Automatically repopulate the input fields when the browser page is reloaded.
Syntax Focus: localStorage.setItem(), localStorage.getItem(), DOMContentLoaded event.
 */
document.getElementById("update").addEventListener("click", () => {
  const body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    // body.classList.add("light");
    // body.classList.remove("dark");

    localStorage.setItem("theam", "light");
  } else {
    // body.classList.add("dark");
    // body.classList.remove("light");

    localStorage.setItem("theam", "dark");
  }
  body.classList = localStorage.getItem("theam");
});
