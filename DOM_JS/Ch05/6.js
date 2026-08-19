/**
 * Program 146: Custom Data Attributes (data-*)
Task: Create elements with custom data-category and data-id attributes. Access and modify these values in JavaScript using the dataset property.
Syntax Focus: HTML data-* attributes, element.dataset.

 */
const card = document.getElementById("card");

function display() {
  console.log("orginal category :" + card.dataset.category);
  console.log("id category :" + card.dataset.id);
  console.log("name category :" + card.dataset.name);
  card.innerText = card.dataset.name;
}
(document.getElementById("log"), addEventListener("click", display));
document.getElementById("log").addEventListener("click", () => {
  if (card.dataset.id == "101") {
    card.dataset.category = "Cloths";
    card.dataset.id = "102";
    card.dataset.name = "coat";
  } else {
    card.dataset.category = "electronics";
    card.dataset.id = "101";
    card.dataset.name = "SmartPhone";
  }
});
