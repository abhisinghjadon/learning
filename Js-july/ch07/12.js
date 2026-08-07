// Program 97: Write a function that retries a failing promise task up to 3 times before failing.
async function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataFile = {
        name: "Abhishek",
        role: "Admin",
      };
      let succ = true;
      if (succ) {
        resolve(dataFile);
      } else {
        reject("Some Database Issue Found");
      }
    }, 2000);
  });
}
async function fetchWithRetry(fn, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${retries}...`);
      const data = await api();
      return data;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error}`);

      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts: ${error}`);
      }
    }
  }
}

// Execution
try {
  const result = await fetchWithRetry(api, 3);
  console.log("Success:", result);
} catch (finalError) {
  console.error("Final Error Handling:", finalError.message);
}
