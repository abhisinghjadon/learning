// Program 96: Write an async function that fetches real data from a public testing API URL in Node.js
async function fetchRealData() {
  const url = "https://jsonplaceholder.typicode.com/users/10";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

try {
  const dataFile = await fetchRealData();
  console.log("Fetched User Data:", dataFile);
} catch (error) {
  console.error("Fetch failed:", error.message);
}
