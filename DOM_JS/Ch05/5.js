/**
 * Program 145: Real-Time List Filter / Search Engine
Task: Build a search bar that dynamically filters and hides/shows items in a list based on whether their text matches the search query.
Syntax Focus: input event, includes(), Display style toggling.

 */ const search = document.getElementById("search");
const listItems = document.querySelectorAll("li");

search.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
