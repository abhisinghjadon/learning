/**
 * 
Program 136: Basic Todo List Builder
Task: Construct a simple Todo List where users can type a task, click "Add", and see it appended dynamically to the list.
Syntax Focus: Form/input handling, Node creation, Event binding.
 */
const Title = document.getElementById("Title");
const Des = document.getElementById("Des");
const body = document.querySelector("tbody");
let serial = 0;
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("Form Submit");
  if (Title.value.trim().length != 0 || Des.value.trim().length != 0) {
    serial++;
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = serial;
    td2.innerText = Title.value.trim();
    td3.innerText = Des.value.trim();

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    body.appendChild(row);
    Title.value = "";
    Des.value = "";
  } else {
    alert("Please Fill Title or Description");
  }
});
