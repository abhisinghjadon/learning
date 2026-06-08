const title = document.getElementById("myTitle");
const discription = document.getElementById("myDiscription");
const table = document.getElementById("myTable");
// const newRow=document.createElement("tr")
// const newSerial=document.createElement("td")
// const newTitle=document.createElement("td")
// const newDiscription=document.createElement("td")
// const newAction=
let count = 1;
let first = true;
function addnew() {
  let func = check();
  if (func) {
    if (first) {
      document.getElementById("r1").style.display = "none";
    }
    const template = `
  <tr>
  <td>${count}</td>
  <td>${title.value.trim()}</td>
    <td>${discription.value.trim()}</td>
    <td>
      <button onclick="this.closest('tr').remove()">Delete</button>
    </td>
  </tr>
  `;
    table.insertAdjacentHTML("beforeend", template);
    count++;
    title.value = "";
    discription.value = "";
  }
}
function check() {
  if (title.value.trim().length > 0 && discription.value.trim().length > 0) {
    alert("Entry Saved Successfully!....");
    return true;
  } else {
    alert("Entry Not Saved Successfully!....");
    return false;
  }
}
