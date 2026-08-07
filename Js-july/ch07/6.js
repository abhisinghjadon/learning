// Program 91: Convert a promise-based chain into modern async/await syntax.
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Finding the Data .....");

    setTimeout(() => {
      let data = "Data Recevied";
      resolve(data);
    }, 2500);
  });
}

(async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
