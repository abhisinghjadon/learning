const title = document.getElementById("myTitle");
const discription = document.getElementById("myDiscription");
const table = document.getElementById("myTable");
let count = 1;
let first = true;

function check() {
  if (title.value.trim().length > 0 && discription.value.trim().length > 0) {
    alert("Entry Saved Successfully!....");
    return true;
  } else {
    alert("Entry Not Saved!....");
    return false;
  }
}

function addnew() {
  if (check()) {
    let currentArray = JSON.parse(localStorage.getItem("myArray")) || [];

    const newEntry = {
      userTitle: title.value.trim(),
      userDesc: discription.value.trim(),
    };

    currentArray.push(newEntry);
    localStorage.setItem("myArray", JSON.stringify(currentArray));
    title.value = "";
    discription.value = "";
    showData();
  }
}

function showData() {
  const tableBody = document.getElementById("tablebody");

  tableBody.innerHTML = "";

  let savedEntries = JSON.parse(localStorage.getItem("myArray")) || [];

  if (savedEntries.length === 0) {
    tableBody.innerHTML = `<tr id="r1"><td colspan="4">No Data Available</td></tr>`;
    return;
  }

  for (let i = 0; i < savedEntries.length; i++) {
    const template = `
      <tr>
        <td>${i + 1}</td> 
        <td>${savedEntries[i].userTitle}</td>
        <td>${savedEntries[i].userDesc}</td>
        <td>
          <button onclick="deleteRow(${i})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", template);
  }
}

function deleteRow(index) {
  let savedEntries = JSON.parse(localStorage.getItem("myArray")) || [];

  savedEntries.splice(index, 1);

  localStorage.setItem("myArray", JSON.stringify(savedEntries));

  showData();
}

window.onload = showData;
