// // Program 97: Write a function that retries a failing promise task up to 3 times before failing.
// async function getdata() {
//   for (let i = 1; i <= 3; i++) {
//     try {
//       const data = await fetch(
//         "https://v6.exchangerate-api.com/v6/GALAT-URL/USD",
//       );
//       const dataset = await data.json();
//       return dataset;
//     } catch (error) {
//       if (i == 3) {
//         throw new Error("Maximum Limit reach");
//       }
//       console.log(`Try ${i} Times to connecting server....`);
//     }
//   }
// }

// getdata()
//   .then((print) => {
//     console.log(print);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//more modern

// Program 97: Write a function that retries a failing promise task up to 3 times before failing.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function getdata() {
  let time = 2000;
  for (let i = 1; i <= 3; i++) {
    try {
      await delay(time);
      const data = await fetch(
        "https://v6.exchangerate-api.com/v6/GALAT-URL/USD",
      );
      const dataset = await data.json();
      return dataset;
    } catch (error) {
      if (i == 3) {
        throw new Error("Maximum Limit reach");
      }
      console.log(`Try ${i} Times to connecting server....`);
    }
    time += 1000;
  }
}

getdata()
  .then((print) => {
    console.log(print);
  })
  .catch((error) => {
    console.error(error);
  });
