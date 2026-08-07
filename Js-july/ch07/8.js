// Program 93: Use Promise.all to run three mock asynchronous tasks simultaneously.
const promise1 = new Promise((resolve, reject) => {
  console.log("Starting First Promise....");
  setTimeout(() => {
    resolve("Resolve First Promise");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  console.log("Starting Second Promise....");
  setTimeout(() => {
    resolve("Resolve Second Promise");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  console.log("Starting Third Promise....");
  setTimeout(() => {
    resolve("Resolve Third Promise");
  }, 2000);
});

const data = Promise.all([promise1, promise2, promise3]);
data.then((resolve) => {
  console.log(data);
});
