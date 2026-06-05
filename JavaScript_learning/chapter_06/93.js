// Program 93: Use Promise.all to run three mock asynchronous tasks simultaneously.
const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello 1");
  }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello 2");
  }, 2000);
});
const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello 3");
  }, 3000);
});
Promise.all([pr1, pr2, pr3])
  .then((result) => {
    const print = result.join("\n");
    console.log(print);
  })
  .catch((error) => {
    console.log("Error :", error);
  });
