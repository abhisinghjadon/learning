/**
 * Program 140: Dynamic Shopping List with Total Calculation
Task: Create a UI where users input an item name and price. Dynamically append the item to a list and update the grand total display.
Syntax Focus: Element creation, Parsing numbers, Aggregating state.

 */
const Tvalue = document.getElementById("valueTotal");
const name = document.getElementById("name");
const price = document.getElementById("price");
const bill = document.getElementById("bill");
let gtotal = 0;

let serial = 1;
bill.style.display = "none";
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const row = document.createElement("tr");
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const value = parseFloat(price.value);
  if (isNaN(value) || value <= 0) {
    alert("Price must be a valid number greater than 0");
    return;
  }

  bill.style.display = "block";

  col1.innerText = serial;
  col2.innerText = name.value.trim();
  col3.innerText = value;

  row.append(col1);
  row.append(col2);
  row.append(col3);
  document.getElementById("TotalRow").insertAdjacentElement("beforebegin", row);
  // console.log( );
  gtotal += value;
  Tvalue.innerText = gtotal;
  serial++;
  name.value = "";
  price.value = "";
});
