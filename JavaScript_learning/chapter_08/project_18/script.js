const sections = ["home", "about", "contact"];

function openfun(tabId) {
  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (id === tabId) {
      element.classList.remove("hide");
      element.classList.add("active");
    } else {
      element.classList.remove("active");
      element.classList.add("hide");
    }
  });
}
