const btn = document.getElementById("them");
const displ = document.getElementById("display");
displ.classList.add(localStorage.getItem("them"));

if (localStorage.getItem("them") == light) {
  btn.innerText = "Dark";
  btn.setAttribute("onclick", "dark()");
} else {
  btn.innerText = "Light";
  btn.setAttribute("onclick", "light()");
}

function dark() {
  btn.innerText = "Light";
  btn.setAttribute("onclick", "light()");
  displ.classList.remove("light");
  displ.classList.add("dark");
  localStorage.setItem("them", "dark");
}

function light() {
  displ.classList.remove("dark");
  displ.classList.add("light");
  btn.innerText = "Dark";
  btn.setAttribute("onclick", "dark()");
  localStorage.setItem("them", "light");
}
