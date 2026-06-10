const display = document.getElementById("dis");
const time = document.getElementById("time");
const indianPrice = document.getElementById("indianPrice");

async function getCryptoPrice() {
  const url = "https://api.api-ninjas.com/v1/cryptoprice?symbol=BTCUSD";
  const now = new Date();
  time.textContent = now.toLocaleTimeString();
  try {
    const response = await fetch(url, {
      method: "GET", // curl mein -X GET tha
      headers: {
        // curl mein -H ke sath jo tha, woh yahan aayega
        "X-Api-Key": "eqjpldN1PcbjhBl2ftRyDT5wdBtWy0k7nsfpEJJb",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    display.textContent = data.price;
    const priceInINR = Number(data.price) * 95;
    indianPrice.textContent =
      "₹" +
      priceInINR.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }); //console.log("Bitcoin Price Data:", data);
    // Output kuch aisa aayega: { symbol: "BTCUSD", price: "65432.10", timestamp: 171829382 }
  } catch (error) {
    console.error("Price laane mein error hui:", error);
  }
}

// Function call
getCryptoPrice();
