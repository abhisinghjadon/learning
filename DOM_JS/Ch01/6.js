/**
 * Program 106: Link Hyperlink Modification
Task: Read the href attribute of an anchor tag (<a>), log it to the console, and programmatically update it to point to a new URL.
Syntax Focus: element.getAttribute(), element.href.
 */
const anch = document.getElementById("a");
anch.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Old Link:", anch.getAttribute("href"));

  anch.setAttribute("href", "2.html");
  console.log("New Link:", anch.getAttribute("href"));

  setTimeout(() => {
    window.location.href = anch.getAttribute("href");
  }, 2500);
});
