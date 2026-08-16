
/**
 * Program 134: Parent & Child Node Traversal
Task: Select a child element, traverse up to its parent using parentElement, and then highlight all child elements of that parent using children.
Syntax Focus: element.parentElement, element.children.
 */

const id = document.getElementById("cl1");
const parent = id.parentElement;
//console.log(parent);
const child = [...parent.children];
//console.log(child);
child.forEach((element) => {
  element.style.backgroundColor = "red";
});
