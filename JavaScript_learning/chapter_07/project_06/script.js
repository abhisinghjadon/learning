const myInput = document.getElementById("myInput");
myInput.addEventListener("input", function () {
  let words = myInput.value.split(" ").length;
  let totalchar = myInput.value.length;
  document.getElementById("word").textContent = words;
  document.getElementById("char").textContent = totalchar;
});
