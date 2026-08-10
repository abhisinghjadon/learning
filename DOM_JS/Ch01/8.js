/**
 * Program 108: Direct Inline Style Modification
Task: Programmatically modify the background color, font size, and text alignment of a <div> element using JavaScript.
Syntax Focus: element.style.property.
 */

const box = document.getElementById("box");
const btn = document.getElementById("button");


btn.addEventListener("click", () => {
  if (btn.innerText == "Dark") {
    box.style.cssText =
      "background-color: black; color: white;font-size: larger;   font-family: 'Times New Roman', Times, serif; width:100% ;height:200px";
    btn.innerText = "Light";
  } else {
    box.style.cssText =
      "background-color: white; color: black ;font-size: x-larger;   font-family: 'Times New Roman', Times, serif; width:100% ;height:200px";
    btn.innerText = "Dark";
  }
});
