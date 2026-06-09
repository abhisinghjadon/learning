const disp = document.getElementById("container");
const main = document.getElementById("box");
const popup = document.getElementById("popup");

function closefu() {
  popup.classList.add("slide-up");

  setTimeout(() => {
    disp.style.display = "none";
    main.style.display = "block";
    popup.classList.remove("slide-up");
  }, 500);
}

function openfun() {
  disp.style.display = "flex";
  disp.style.zIndex = "2";
  main.style.display = "none";
}
