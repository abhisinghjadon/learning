/**
 * Program 104: Text Transformation on Click
Task: Create a button and a heading (<h1>). Change the text of the heading when the button is clicked.
Syntax Focus: element.addEventListener('click', callback).

 */
const heading = document.getElementById("h1");
// console.log(heading.innerText);
const dynam = [
  "Hello,Who are You?",
  "Welcome",
  "Welcome Back",
  "JS Load Successfully",
  "I am a div",
];
let con = 0;

document.getElementById("button").addEventListener("click", () => {
  //   console.log("Button Click");
  if (con >= dynam.length) {
    con = 0;
  }
  heading.innerText = dynam[con];
  con++;
});
