/**
 * Program 142: Event Bubbling vs Capturing Demonstration
Task: Nest three <div> elements (Outer, Inner, Button). Attach click listeners to all three and demonstrate the difference between Bubbling and Capturing phases.
Syntax Focus: Event Propagation, useCapture parameter, e.stopPropagation().
 */ const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const child = document.querySelector("#child");
const output = document.querySelector("#output");

function logEvent(phase) {
  return function (e) {
    output.textContent += `${phase}: ${e.currentTarget.id}\n`;
  };
}

// Third argument false ya blank = Bubbling (Child -> Inner -> Outer)
// outer.addEventListener("click", logEvent("Bubbling"), false);
// inner.addEventListener("click", logEvent("Bubbling"), false);
// child.addEventListener("click", logEvent("Bubbling"), false);

// Third argument true = Capturing (Outer -> Inner -> Child)
outer.addEventListener("click", logEvent("Capturing"), true);
inner.addEventListener("click", logEvent("Capturing"), true);
child.addEventListener("click", logEvent("Capturing"), true);

// Yeh event ko Outer tak nahi pahunchne dega
// inner.addEventListener("click", (e) => {
//   output.textContent += `Stopped at: ${e.currentTarget.id}\n`;
//   e.stopPropagation();
// });
