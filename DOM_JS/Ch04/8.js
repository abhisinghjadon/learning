/**
 * Program 138: Dynamic HTML Table Row Insertion
Task: Capture user inputs (Name, Age, Role) from a form and dynamically append a new row (<tr>) with appropriate data cells (<td>) to an HTML table.
Syntax Focus: Table DOM APIs or string row construction.

 */
let serial = 1;
(document.getElementById("form"),
  addEventListener("submit", (e) => {
    e.preventDefault();
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const course = document.getElementById("course");
    col1.innerText = serial;
    col2.innerText = name.value.trim();
    col3.innerText = age.value.trim();
    col4.innerText = course.value.trim();

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    document.querySelector("tbody").appendChild(row);

    serial++;
    name.value = "";
    age.value = "";
    course.value = "";
  }));
