const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "502d6496770e499398491013260806"; // Apni key yahan enter karein
const display = document.getElementById("display");

let defaultCity = localStorage.getItem("city");
if (!defaultCity || defaultCity.trim() === "") {
  defaultCity = "Aligarh";
  localStorage.setItem("city", defaultCity);
}

function getActiveLocation(isManualSearch = false) {
  const inputField = document.getElementById("city");
  const tempLoc = inputField ? inputField.value.trim() : "";

  if (isManualSearch) {
    if (tempLoc.length === 0) {
      alert(
        "You did not enter any city! Using default city: " +
          localStorage.getItem("city"),
      );
      return localStorage.getItem("city");
    }
    return tempLoc;
  }
  return localStorage.getItem("city");
}

// Date Picker se selected date nikalne ke liye function
function getSelectedDate() {
  const dateField = document.getElementById("weather-date");
  return dateField ? dateField.value : "2026-06-08";
}

async function callWeatherAPI(endpoint, location, queryParams = "") {
  const url = `${BASE_URL}/${endpoint}?key=${API_KEY}&q=${location}${queryParams}`;
  try {
    const response = await fetch(url);
    if (response.status === 400) {
      alert("Location Invalid || Invalid Date ");
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
}

async function CurrentWeather(location) {
  display.innerHTML = "";
  const data = await callWeatherAPI("forecast.json", location);
  if (data && data.current) {
    const loc = data.location;
    const cur = data.current;

    localStorage.setItem("city", loc.name);

    const weatherHTML = `
        <div class="weather-card" style="border-bottom: 1px solid #ccc; margin-bottom: 15px; padding-bottom: 10px; background: white; padding: 15px; border-radius: 5px;">
            <p><strong>Location:</strong> ${loc.name}, ${loc.region}, ${loc.country}</p>
            <p><strong>Local Time:</strong> ${loc.localtime}</p>
            <p><strong>Temperature:</strong> ${cur.temp_c}°C (${cur.temp_f}°F)</p>
            <p><strong>Condition:</strong> ${cur.condition.text}</p>
            <p><strong>Wind:</strong> ${cur.wind_kph} KPH, Direction: ${cur.wind_dir}</p>
            <p><strong>Humidity:</strong> ${cur.humidity}%, Feels Like: ${cur.feelslike_c}°C</p>
            <p><strong>UV Index:</strong> ${cur.uv}</p>
        </div>
    `;
    display.insertAdjacentHTML("beforeend", weatherHTML);
  }
}

async function ForecastAndAlerts(location) {
  display.innerHTML = "";
  const data = await callWeatherAPI(
    "forecast.json",
    location,
    "&days=2&aqi=yes&alerts=yes",
  );
  if (!data) return;

  let aqiHTML = "";
  let forecastHTML = "";
  let alertsHTML = "";

  if (data.current && data.current.air_quality) {
    const aqi = data.current.air_quality;
    aqiHTML = `
        <div class="aqi-section" style="margin-top: 10px;">
            <h4><strong>Current Air Quality (AQI)</strong></h4>
            <p><strong>PM2.5:</strong> ${aqi.pm2_5} | <strong>PM10:</strong> ${aqi.pm10}</p>
            <p><strong>US EPA Index:</strong> ${aqi["us-epa-index"]} | <strong>GB Defra Index:</strong> ${aqi["gb-defra-index"]}</p>
        </div>
    `;
  }

  if (data.forecast && data.forecast.forecastday) {
    forecastHTML = `<div class="forecast-section" style="margin-top: 15px;"><h4><strong>Forecast Breakdown</strong></h4>`;
    data.forecast.forecastday.forEach((dayData) => {
      forecastHTML += `
          <div class="forecast-day" style="padding-left: 10px; border-left: 2px solid #007bff; margin-bottom: 8px; margin-top: 5px;">
              <p><strong>Date:</strong> ${dayData.date}</p>
              <p><strong>Max Temp:</strong> ${dayData.day.maxtemp_c}°C | <strong>Min Temp:</strong> ${dayData.day.mintemp_c}°C</p>
              <p><strong>Avg Humidity:</strong> ${dayData.day.avghumidity}%</p>
              <p><strong>Condition:</strong> ${dayData.day.condition.text}</p>
              <p><strong>Will it Rain?:</strong> ${dayData.day.daily_will_it_rain === 1 ? "Yes" : "No"} (<strong>Chance:</strong> ${dayData.day.daily_chance_of_rain}%)</p>
          </div>
      `;
    });
    forecastHTML += `</div>`;
  }

  if (data.alerts && data.alerts.alert && data.alerts.alert.length > 0) {
    alertsHTML = `<div class="alerts-section" style="margin-top: 15px; color: #dc3545;"><h4><strong>Active Weather Alerts</strong></h4>`;
    data.alerts.alert.forEach((alert) => {
      alertsHTML += `<p>⚠️ <strong>Alert:</strong> ${alert.event} - ${alert.headline}</p>`;
    });
    alertsHTML += `</div>`;
  } else {
    alertsHTML = `<div class="alerts-section" style="margin-top: 15px; color: #28a745;"><p><strong>Alerts:</strong> No active alerts found.</p></div>`;
  }

  const finalCardHTML = `
        <div class="forecast-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #f9f9f9;">
            <h3><strong>Weather Report & Forecast</strong></h3>
            ${aqiHTML}
            ${forecastHTML}
            ${alertsHTML}
        </div>
    `;
  display.insertAdjacentHTML("beforeend", finalCardHTML);
}

async function HistoryWeather(location, date) {
  display.innerHTML = "";
  const data = await callWeatherAPI("history.json", location, `&dt=${date}`);
  if (data && data.forecast && data.forecast.forecastday) {
    const historyData = data.forecast.forecastday[0];
    const historyHTML = `
        <div class="history-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #fcfcfc;">
            <h3><strong>Historical Weather Report</strong></h3>
            <p><strong>Selected Date:</strong> ${historyData.date}</p>
            <div style="margin-top: 10px; padding-left: 10px; border-left: 2px solid #6c757d;">
                <p><strong>Max Temperature:</strong> ${historyData.day.maxtemp_c}°C</p>
                <p><strong>Min Temperature:</strong> ${historyData.day.mintemp_c}°C</p>
                <p><strong>Average Temperature:</strong> ${historyData.day.avgtemp_c}°C</p>
                <p><strong>Weather Condition:</strong> ${historyData.day.condition.text}</p>
                <p><strong>Total Precipitation:</strong> ${historyData.day.totalprecip_mm} mm</p>
            </div>
        </div>
    `;
    display.insertAdjacentHTML("beforeend", historyHTML);
  }
}

async function Astronomy(location, date) {
  display.innerHTML = "";
  const data = await callWeatherAPI("astronomy.json", location, `&dt=${date}`);
  if (data && data.astronomy && data.astronomy.astro) {
    const astro = data.astronomy.astro;
    const astronomyHTML = `
        <div class="astronomy-card" style="border: 1px solid #dcdde1; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #f5f6fa;">
            <h3><strong>Astronomy & Celestial Information</strong></h3>
            <p><strong>Date:</strong> ${date}</p>
            <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding-left: 10px; border-left: 2px solid #9c27b0;">
                <div>
                    <p>☀️ <strong>Sunrise:</strong> ${astro.sunrise}</p>
                    <p>🌇 <strong>Sunset:</strong> ${astro.sunset}</p>
                </div>
                <div>
                    <p>🌙 <strong>Moonrise:</strong> ${astro.moonrise}</p>
                    <p>🌜 <strong>Moonset:</strong> ${astro.moonset}</p>
                </div>
            </div>
        </div>
    `;
    display.insertAdjacentHTML("beforeend", astronomyHTML);
  }
}

function handleSearchClick() {
  const manualLocation = getActiveLocation(true);
  const selectedDate = getSelectedDate();

  // Jis tab par user khada hai, search karne par usi ka data update ho naye shehar ke mutabik
  const activeTab = document.querySelector(".nav-item.active-tab");
  const tabType = activeTab ? activeTab.getAttribute("data-type") : "current";

  if (tabType === "current" || !tabType) {
    CurrentWeather(manualLocation);
  } else if (tabType === "forecast") {
    ForecastAndAlerts(manualLocation);
  } else if (tabType === "history") {
    HistoryWeather(manualLocation, selectedDate);
  } else if (tabType === "astronomy") {
    Astronomy(manualLocation, selectedDate);
  }
}

function handleTabSwitch(e) {
  if (!e.target.classList.contains("nav-item")) return;

  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("active-tab"));
  e.target.classList.add("active-tab");

  const currentSavedLocation = getActiveLocation(false);
  const tabType = e.target.getAttribute("data-type");
  const dateContainer = document.getElementById("date-container");

  // Dynamic Toggle: Agar history ya astronomy tab hai toh date field dikhao, varna chupa do
  if (tabType === "history" || tabType === "astronomy") {
    dateContainer.style.display = "inline-block";
  } else {
    dateContainer.style.display = "none";
  }

  const selectedDate = getSelectedDate();

  if (tabType === "current" || !tabType) {
    CurrentWeather(currentSavedLocation);
  } else if (tabType === "forecast") {
    ForecastAndAlerts(currentSavedLocation);
  } else if (tabType === "history") {
    HistoryWeather(currentSavedLocation, selectedDate);
  } else if (tabType === "astronomy") {
    Astronomy(currentSavedLocation, selectedDate);
  }
}

document
  .getElementById("searchBtn")
  .addEventListener("click", handleSearchClick);
document.getElementById("navbar").addEventListener("click", handleTabSwitch);

// Date change hone par automatic content refresh karne ke liye listner
document.getElementById("weather-date").addEventListener("change", () => {
  const currentSavedLocation = getActiveLocation(false);
  const activeTab = document.querySelector(".nav-item.active-tab");
  const tabType = activeTab ? activeTab.getAttribute("data-type") : "";
  const selectedDate = getSelectedDate();

  if (tabType === "history") {
    HistoryWeather(currentSavedLocation, selectedDate);
  } else if (tabType === "astronomy") {
    Astronomy(currentSavedLocation, selectedDate);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const initialLocation = getActiveLocation(false);
  CurrentWeather(initialLocation);
});

//unoptimized code let defaultCity = localStorage.getItem("city");
/*
if (!defaultCity) {
  defaultCity = "Aligarh";
  localStorage.setItem("city", defaultCity);
}

async function check() {
        
    
  let tempLoc = document.getElementById("city").value.trim();

  if (tempLoc.length == 0) {
    alert(`You are Not Enter Any City \n So default City Set Aligarh`);
    return "aligarh";
  } else return tempLoc;
}

async function searchData() {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "";
  const LOCATION = await check();

  const display = document.getElementById("display");

  async function callWeatherAPI(endpoint, queryParams = "") {
    const url = `${BASE_URL}/${endpoint}?key=${API_KEY}&q=${LOCATION}${queryParams}`;
    try {
      const response = await fetch(url);
      if (response.status === 400) {
        alert("Location Invalid");
        return null;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      return null;
    }
  }

  async function CurrentWeather() {
    display.innerHTML = "";
    const data = await callWeatherAPI("forecast.json");
    if (data && data.current) {
      const loc = data.location;
      const cur = data.current;
      const weatherHTML = `
        <div class="weather-card" style="border-bottom: 1px solid #ccc; margin-bottom: 15px; padding-bottom: 10px;">
            <p><strong>Location:</strong> ${loc.name}, ${loc.region}, ${loc.country}</p>
            <p><strong>Local Time:</strong> ${loc.localtime}</p>
            <p><strong>Temperature:</strong> ${cur.temp_c}°C (${cur.temp_f}°F)</p>
            <p><strong>Condition:</strong> ${cur.condition.text}</p>
            <p><strong>Wind:</strong> ${cur.wind_kph} KPH, Direction: ${cur.wind_dir}</p>
            <p><strong>Humidity:</strong> ${cur.humidity}%, Feels Like: ${cur.feelslike_c}°C</p>
            <p><strong>UV Index:</strong> ${cur.uv}</p>
        </div>
    `;
      display.insertAdjacentHTML("beforeend", weatherHTML);
    }
  }
  async function ForecastAndAlerts() {
    display.innerHTML = "";
    const data = await callWeatherAPI(
      "forecast.json",
      "&days=2&aqi=yes&alerts=yes",
    );
    if (!data) return;

    let aqiHTML = "";
    let forecastHTML = "";
    let alertsHTML = "";

    if (data.current && data.current.air_quality) {
      const aqi = data.current.air_quality;
      aqiHTML = `
        <div class="aqi-section" style="margin-top: 10px;">
            <h4><strong>Current Air Quality (AQI)</strong></h4>
            <p><strong>PM2.5:</strong> ${aqi.pm2_5} | <strong>PM10:</strong> ${aqi.pm10}</p>
            <p><strong>US EPA Index:</strong> ${aqi["us-epa-index"]} | <strong>GB Defra Index:</strong> ${aqi["gb-defra-index"]}</p>
        </div>
    `;
    }

    if (data.forecast && data.forecast.forecastday) {
      forecastHTML = `<div class="forecast-section" style="margin-top: 15px;"><h4><strong>Forecast Breakdown</strong></h4>`;
      data.forecast.forecastday.forEach((dayData) => {
        forecastHTML += `
          <div class="forecast-day" style="padding-left: 10px; border-left: 2px solid #007bff; margin-bottom: 8px;">
              <p><strong>Date:</strong> ${dayData.date}</p>
              <p><strong>Max Temp:</strong> ${dayData.day.maxtemp_c}°C | <strong>Min Temp:</strong> ${dayData.day.mintemp_c}°C</p>
              <p><strong>Avg Humidity:</strong> ${dayData.day.avghumidity}%</p>
              <p><strong>Condition:</strong> ${dayData.day.condition.text}</p>
              <p><strong>Will it Rain?:</strong> ${dayData.day.daily_will_it_rain === 1 ? "Yes" : "No"} (<strong>Chance:</strong> ${dayData.day.daily_chance_of_rain}%)</p>
          </div>
      `;
      });
      forecastHTML += `</div>`;
    }

    if (data.alerts && data.alerts.alert && data.alerts.alert.length > 0) {
      alertsHTML = `<div class="alerts-section" style="margin-top: 15px; color: #dc3545;"><h4><strong>Active Weather Alerts</strong></h4>`;
      data.alerts.alert.forEach((alert) => {
        alertsHTML += `<p>⚠️ <strong>Alert:</strong> ${alert.event} - ${alert.headline}</p>`;
      });
      alertsHTML += `</div>`;
    } else {
      alertsHTML = `<div class="alerts-section" style="margin-top: 15px; color: #28a745;"><p><strong>Alerts:</strong> No active alerts found.</p></div>`;
    }

    const finalCardHTML = `
        <div class="forecast-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #f9f9f9;">
            <h3><strong>Weather Report & Forecast</strong></h3>
            ${aqiHTML}
            ${forecastHTML}
            ${alertsHTML}
        </div>
    `;
    display.insertAdjacentHTML("beforeend", finalCardHTML);
  }

  async function HistoryWeather(date) {
    display.innerHTML = "";
    const data = await callWeatherAPI("history.json", `&dt=${date}`);
    if (data && data.forecast && data.forecast.forecastday) {
      const historyData = data.forecast.forecastday[0];
      const historyHTML = `
        <div class="history-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #fcfcfc;">
            <h3><strong>Historical Weather Report</strong></h3>
            <p><strong>Selected Date:</strong> ${historyData.date}</p>
            <div style="margin-top: 10px; padding-left: 10px; border-left: 2px solid #6c757d;">
                <p><strong>Max Temperature:</strong> ${historyData.day.maxtemp_c}°C (${historyData.day.maxtemp_f}°F)</p>
                <p><strong>Min Temperature:</strong> ${historyData.day.mintemp_c}°C (${historyData.day.mintemp_f}°F)</p>
                <p><strong>Average Temperature:</strong> ${historyData.day.avgtemp_c}°C (${historyData.day.avgtemp_f}°F)</p>
                <p><strong>Weather Condition:</strong> ${historyData.day.condition.text}</p>
                <p><strong>Total Precipitation:</strong> ${historyData.day.totalprecip_mm} mm</p>
            </div>
        </div>
    `;
      display.insertAdjacentHTML("beforeend", historyHTML);
    }
  }

  async function Astronomy(date) {
    display.innerHTML = "";
    const data = await callWeatherAPI("astronomy.json", `&dt=${date}`);
    if (data && data.astronomy && data.astronomy.astro) {
      const astro = data.astronomy.astro;
      const astronomyHTML = `
        <div class="astronomy-card" style="border: 1px solid #dcdde1; border-radius: 8px; padding: 15px; margin-bottom: 20px; background-color: #f5f6fa;">
            <h3><strong>Astronomy & Celestial Information</strong></h3>
            <p><strong>Date:</strong> ${date}</p>
            <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding-left: 10px; border-left: 2px solid #9c27b0;">
                <div>
                    <p>☀️ <strong>Sunrise:</strong> ${astro.sunrise}</p>
                    <p>🌇 <strong>Sunset:</strong> ${astro.sunset}</p>
                </div>
                <div>
                    <p>🌙 <strong>Moonrise:</strong> ${astro.moonrise}</p>
                    <p>🌜 <strong>Moonset:</strong> ${astro.moonset}</p>
                </div>
            </div>
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #dcdde1;">
                <p><strong>Moon Phase:</strong> ${astro.moon_phase}</p>
                <p><strong>Moon Illumination:</strong> ${astro.moon_illumination}%</p>
            </div>
        </div>
    `;
      display.insertAdjacentHTML("beforeend", astronomyHTML);
    }
  }

  async function runAllDashboardLogs() {
    await CurrentWeather();
    await ForecastAndAlerts();
    await HistoryWeather("2010-01-01");
    await Astronomy("2026-06-08");
  }
  CurrentWeather();
 

  //runAllDashboardLogs();
}
*/
