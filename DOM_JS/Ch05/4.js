/**
 * Program 144: Checkbox & Radio Selection Validation
Task: Validate a form before submission to ensure a "Terms and Conditions" checkbox is checked and at least one radio button option is selected.
Syntax Focus: input.checked, Conditional validation.
 */
const form = document.getElementById("form");
const dataOutput = document.getElementById("data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Checkbox elements ko access karein
  const terms = document.getElementById("check");
  const selectedRadio = document.querySelector('input[name="gender"]:checked');

  if (!terms.checked) {
    alert("Please accept Terms and Conditions.");
    return;
  }

  // 3. Radio Button Validation
  if (!selectedRadio) {
    alert("Please select at least one option.");
    return;
  }

  // 4. Sab sahi hone par summary show karein
  const formData = new FormData(e.target);
  let summary = "";
  for (const [key, value] of formData.entries()) {
    summary += `${key}: ${value.toString().trim()}\n`;
  }

  dataOutput.textContent = summary;
});
