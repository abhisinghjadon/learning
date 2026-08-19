/**
 Program 148: Basic Drag and Drop Interface
Task: Make a <div> draggable using draggable="true". Handle dragstart, dragover, and drop events to move the element into a drop zone container.
Syntax Focus: HTML5 Drag and Drop API events.
 */

const item = document.getElementById("item");
const box = document.getElementById("dro");

// Element ki ID ko transfer data me save
item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

box.addEventListener("dragover", (e) => {
  e.preventDefault();
  box.style.backgroundColor = "lightgray";
});

box.addEventListener("dragleave", () => {
  box.style.backgroundColor = "transparent";
});

box.addEventListener("drop", (e) => {
  e.preventDefault();
  box.style.backgroundColor = "lightblue";

  const id = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(id);
  box.appendChild(draggedElement);
});
