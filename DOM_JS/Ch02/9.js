/**
 * Program 119: Scroll-Triggered Navbar Styling
Task: Detect window scroll events. Add a .sticky-shadow class to the navigation bar when scrolled past 50 pixels, and remove it when at the top.
Syntax Focus: window.addEventListener('scroll'), window.scrollY.

 */
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("sticky-shadow");
  } else {
    nav.classList.remove("sticky-shadow");
  }
});
