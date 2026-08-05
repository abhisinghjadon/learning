// Program 87: Create a recurring timer using setInterval that stops after 5 iterations.
let val = 1;
let count = setInterval(() => {
  if (val >= 5) {
    clearInterval(count);
    break
  }
  console.log(val++);
}, 1000);
