/**
 * rogram 131: Dynamic Element Creation
Task: Create a new <li> element using document.createElement(), assign text content to it, and append it to an existing <ul> using appendChild().
Syntax Focus: document.createElement(), parent.appendChild().
 */

const list = document.getElementById("list");
let value = 5;

document.getElementById("btn").addEventListener("click", () => {
  const li = document.createElement("li");
  let str = "List " + value;
  value++;
  li.innerText = str;
  list.appendChild(li);
});
