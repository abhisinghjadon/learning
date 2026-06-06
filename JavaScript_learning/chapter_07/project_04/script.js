//Project 4: Real-time Input Mirror: An input text field whose text instantly reflects into a heading tag below it as you type.
const myInput = document.getElementById("myInput");
const mirror = document.getElementById("mirror");
myInput.addEventListener("input", function () {
  const value = myInput.value;
  const reversedValue = value.split("").reverse().join("");
  mirror.innerText = reversedValue;
});
