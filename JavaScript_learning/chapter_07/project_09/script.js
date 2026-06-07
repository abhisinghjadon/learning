//parent element.append child(element)
const input = document.getElementById("myInput");
const button = document.getElementById("button");
const list = document.getElementById("myList");
const newitem = document.createElement("li");
let count = 0;
function add() {
  if (count == 0) {
    const deleteitem = document.getElementById("old");
    deleteitem.remove();
    count++;
  }
  const text = input.value.trim();
  const list = document.getElementById("myList");
  const newitem = document.createElement("li");
  newitem.innerText = text;
  list.appendChild(newitem);
  input.value = "";
}
