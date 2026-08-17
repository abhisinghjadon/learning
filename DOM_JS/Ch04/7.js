/**
 * Program 137: DOM Node Cloning
Task: Duplicate a UI card element using cloneNode(true) and append the clone to a target container.
Syntax Focus: element.cloneNode(deep).
 */
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let card = btn.parentElement.parentElement.cloneNode(true);
  console.log(card);

  document.body.append(card);
});
