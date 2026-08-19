/**
 Program 149: Scroll Animation via Intersection Observer
Task: Use the IntersectionObserver API to detect when an element enters the viewport and trigger a CSS fade-in animation.
Syntax Focus: new IntersectionObserver(), observer.observe().
 */
const boxes = document.querySelectorAll(".animate-box");

//  IntersectionObserver create karein
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

boxes.forEach((box) => observer.observe(box));
