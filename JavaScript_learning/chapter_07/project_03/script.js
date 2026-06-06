//Project 3: Hex Color Code Display: Display the current random hex code as text on the screen alongside the color changer.
document.getElementById("myButton").addEventListener("click", function () {
  const Code = document.getElementById("myInput").value;
  document.body.style.backgroundColor = Code;
});
