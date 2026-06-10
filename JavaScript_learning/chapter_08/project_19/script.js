
function Search() {
  const searchWord = document
    .getElementById("inputa")
    .value.trim()
    .toLowerCase();
  const listItems = document.querySelectorAll("ul li");
  const notFoundMessage = document.getElementById("notFoundMessage");

  let hasMatch = false;
  listItems.forEach((li) => {
    let text = li.textContent.toLowerCase();

    if (searchWord === "") {
      li.style.color = "";
      li.style.backgroundColor = "transparent";
      li.style.display = "block";
      li.style.listStyleType = "initial";
      return;
    }

    if (text.includes(searchWord)) {
      li.style.color = "yellow";
      li.style.backgroundColor = "black";
      li.style.listStyleType = "none";
      li.style.display = "block";
      hasMatch = true; // Match mil gaya!
    } else {
      li.style.display = "none";
    }
  });

  if (searchWord === "" || hasMatch) {
    notFoundMessage.style.display = "none";
  } else {
    notFoundMessage.style.display = "block";
  }
}
