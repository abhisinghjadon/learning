/**.
 * Program 133: Dynamic Node Removal
Task: Create a list of items where each item contains a "Delete" button. Clicking the button should remove that specific item using element.remove().
Syntax Focus: element.remove(), node.removeChild().

 */

function rem(id) {
  let row = document.getElementById(id);
  row.remove();
}
