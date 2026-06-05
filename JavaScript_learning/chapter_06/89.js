// Program 89: Create a Promise that rejects if a condition is not met, and handle it via .catch().
const myPromise = new Promise((resolve, reject) => {
  let c_flase = true;
  if (c_flase) {
    const mess = "Come some Error";
    reject(new Error(mess));
  } else {
    resolve("Successfull");
  }
});
myPromise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
