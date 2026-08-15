/**
 * 
Program 130: Custom Context Menu (Right-Click Interception)
Task: Prevent the default browser right-click menu using e.preventDefault() and display a custom custom <div> menu at the mouse coordinates.
Syntax Focus: contextmenu event, e.preventDefault(), absolute positioning.
 */
const menu = document.getElementById("menu");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  //console.log("hello");
  menu.style.left = e.pageX + "px";
  menu.style.top = e.pageY + "px";
  menu.style.display = "block";
});

document.addEventListener("click", () => {
  menu.style.display = "none";
});
