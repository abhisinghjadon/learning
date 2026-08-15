/**
 * Program 132: Comparing append() and prepend()
Task: Insert new elements at the beginning of a container using prepend() and at the end using append(). Observe positional differences.
Syntax Focus: element.prepend(), element.append().

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

document.getElementById("btnpre").addEventListener("click", () => {
  const li = document.createElement("li");
  let str = "List " + value;
  value++;
  li.innerText = str;
  list.prepend(li);
});
