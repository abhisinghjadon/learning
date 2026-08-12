// Program 120: Tabbed Content Interface
// Task: Create a 3-tab layout. Clicking a tab button should show its corresponding content panel while hiding all other panels.
// Syntax Focus: Data attributes, Class removal loops, UI state management.

const all = document.querySelectorAll("div");
function opentab(box) {
  //  console.log(box);
  all.forEach((element) => {
    element.style.display = "none";
  });
  const selectedTab = document.getElementById(box);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}
function refresh() {
  window.location.reload();
}
