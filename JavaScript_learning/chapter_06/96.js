// Program 96: Write an async function that fetches real data from a public testing API URL in Node.js (using dynamic import of fetch or built-in fetch if node version allows).
async function getdata() {
  try {
    const data = await fetch(
      "https://v6.exchangerate-api.com/v6/your_Api_key/latest/USD",
    );
    const dataset = await data.json();
    console.log(dataset);
  } catch (error) {
    console.error("Error: ", error);
  }
}
getdata();
