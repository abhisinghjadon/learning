// Program 88: Create a basic Promise that resolves with a success message.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = "hello";
    const not_mes = "Someting Error";
    resolve(message);
    reject(not_mes);
  }, 1000);
});
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
