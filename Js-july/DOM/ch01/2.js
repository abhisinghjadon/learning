
let dynBox = document.getElementById("para");
let inp = document.getElementById("input");
if (dynBox && dynBox.innerText.trim() === "") {
  dynBox.innerText = "Hello I am a Dynamic Content Box......";
}
if (inp) {
  inp.addEventListener("input", (event) => {
    if (inp.value.trim() !== "") {
      dynBox.innerText = inp.value;
    } else {
      dynBox.innerText = "Hello I am a Dynamic Content Box......";
    }
  });
}
