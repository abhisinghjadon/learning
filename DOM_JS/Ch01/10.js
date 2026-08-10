/**
Program 110: Iterating and Styling Multiple Elements
Task: Select an unordered list (<ul>). Iterate over all list items (<li>) using a loop and apply a background color to every second item.
Syntax Focus: document.querySelectorAll(), NodeList iteration, Modulo operator (%).

 */
const list = document.querySelectorAll("#my-list li");
console.log(list);

list.forEach((item, index) => {
  if (index % 2 == 0) {
    item.style.backgroundColor = "lightblue";
  }
});
