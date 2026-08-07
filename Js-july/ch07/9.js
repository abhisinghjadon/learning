// Program 94: Use Promise.race to get the result from the fastest resolving mock promise.
const promise1 = new Promise((resolve, reject) => {
  console.log("Starting First Promise....");
  setTimeout(() => {
    resolve("Resolve First Promise");
  }, 5000);
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
  }, 3000);
});
const data = Promise.race([promise1, promise2, promise3]);
console.log(data);

data.then((resolve) => {
  console.log(data);
});
