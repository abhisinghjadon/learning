// Program 95: Create a simulated API fetch function that returns user data after 2 seconds using Promises.
const api = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = {
      name: "Abhishek Thakur",
      role: "Admin",
    };
    resolve(data);
    reject("Some Error to Connect to Database");
  }, 2000);
});

const dataFile = api;
dataFile
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(reject);
  });
