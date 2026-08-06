// Program 88: Create a basic Promise that resolves with a success message.
const prom = new Promise((resolve, reject) => {
  console.log("Starting to Connect....");
  let promresult = false;
  result = "Resolve";
  fail = "Reject from some Reason";
  setTimeout(() => {
    if (promresult) {
      resolve(result);
    } else reject(fail);
  }, 2000);
});

prom
  .then((resolve) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
