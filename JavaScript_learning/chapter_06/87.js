// Program 87: Create a recurring timer using setInterval that stops after 5 iterations.
let iterations = 0;
const set = setInterval(() => {
  iterations++;
  if (iterations == 5) {
    clearInterval(set);
  }
  console.log("Hello!...\nAbhishek Thakur");
}, 1000);
