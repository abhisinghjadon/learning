/**
 * Program 115: Modal Window Toggle
Task: Create a modal popup overlay. Toggle its visibility by adding or removing a .hidden CSS class using open and close buttons.
Syntax Focus: Modal overlay patterns, CSS class toggling.

 */

function toggleModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.toggle("hidden");
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
  toggleModal();
}
