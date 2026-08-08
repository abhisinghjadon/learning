/**
Program 103: Comparing textContent, innerText, and innerHTML
Task: Select a container element containing hidden text and child markup. Retrieve and print its textContent, innerText, and innerHTML to analyze their differences.
Syntax Focus: element.textContent, element.innerText, element.innerHTML.

 */

const element = document.getElementById("starting");
document.getElementById("innerText").innerText = element.innerText;
document.getElementById("innerHtml").innerText = element.innerHTML;
document.getElementById("textContent").innerText = element.textContent;
