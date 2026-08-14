/**
 * Program 127: Interactive Counter Application
Task: Create a numeric counter with Increment, Decrement, and Reset buttons. Ensure the counter value turns red if negative and green if positive.
 */
const data = document.getElementById("value");

let value = 0;

data.innerText = value;

function func(param) {
  if (param == "inc") {
    value++;
  } else if (param == "dec") {
    value--;
  } else if (param == "res") {
    value = 0;
  } else {
    console.log("No function Exist");
  }
  data.innerText = value;
}
