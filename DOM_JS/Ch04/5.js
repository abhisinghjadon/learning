
/**
 * Program 135: Sibling Node Traversal
Task: Given an active list item, style its immediately adjacent siblings using nextElementSibling and previousElementSibling.
Syntax Focus: nextElementSibling, previousElementSibling.
 */
const id = document.getElementById("cl1");
const next = id.nextElementSibling;
const previous = id.previousElementSibling;
// console.log(next);
next.style.backgroundColor = "lightgreen";
previous.style.backgroundColor = "yellow";
