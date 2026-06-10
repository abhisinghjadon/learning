const searchForm = document.getElementById("form");
const searchInput = document.getElementById("input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const finalSearch = searchInput.value.trim();

  if (finalSearch === "") return;

  const googleUrl = `https://github.com/${finalSearch}`;

  window.open(googleUrl, "_blank");
});
