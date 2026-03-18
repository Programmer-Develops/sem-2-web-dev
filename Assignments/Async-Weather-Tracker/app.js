const cityInput = document.getElementById("city");
const searchButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weatherDisplay");
const historyContainer = document.getElementById("history");
const consoleOutput = document.getElementById("consoleOutput");
const title = document.getElementById("title");

let searchHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];

const customConsole = {
  log: (type, message) => {
    const div = document.createElement("div");
    div.className = `console-log ${type.toLowerCase()}`;
    div.textContent = `📍 ${type} ${message}`;
    consoleOutput.appendChild(div);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
};

function renderHistory() {
  historyContainer.innerHTML = searchHistory.map((city, index) => `
    <div class="history-tag">
      <span onclick="searchCityFromHistory('${city.replace(/'/g, "\\'")}')">${city}</span>
      <span class="delete-btn" onclick="removeFromHistory(${index})">×</span>
    </div>
  `).join("");
}

window.searchCityFromHistory = (city) => {
  cityInput.value = city;
  handleFetch();
};

window.removeFromHistory = (index) => {
  const removedCity = searchHistory.splice(index, 1);
  localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
  renderHistory();
  customConsole.log("HISTORY", `Removed: ${removedCity}`);
};

function addToHistory(city) {
  if (!searchHistory.includes(city)) {
    searchHistory.unshift(city);
    if (searchHistory.length > 5) searchHistory.pop();
    localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
    renderHistory();
    customConsole.log("HISTORY", `Added: ${city}`);
  }
}

function geocodeCity(city) {
  customConsole.log("GEOCODE", `Searching for "${city}"...`);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Geocode failed: HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (!data.results || data.results.length === 0) throw new Error("City not found");
      const best = data.results[0];
      customConsole.log("GEOCODE", `Found: ${best.name}`);
      
      return {
        lat: best.latitude,
        lon: best.longitude,
        displayName: `${best.name}${best.admin1 ? `, ${best.admin1}` : ""}`
      };
    });
}

function fetchWeather(location) {
  customConsole.log("FETCH", "Requesting Open-Meteo forecast...");
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&hourly=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,temperature_80m,wind_speed_80m,wind_direction_80m&forecast_days=1&timezone=auto`;

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Forecast failed: HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data.error) throw new Error(data.reason || "API error");
      customConsole.log("FETCH", "Data received");
      return { weatherData: data, placeName: location.displayName };
    });
}

function updateWeatherDisplay(data, placeName) {
  if (!data) {
    weatherDisplay.innerHTML = `<div class="weather-field"><span class="weather-label">Error</span><span class="weather-value">No data</span></div>`;
    return;
  }

  const now = new Date();
  let idx = 0;
  let minDiff = Infinity;
  
  data.hourly.time.forEach((timeStr, i) => {
    const diff = Math.abs(new Date(timeStr) - now);
    if (diff < minDiff) { minDiff = diff; idx = i; }
  });

  const h = data.hourly;
  weatherDisplay.innerHTML = `
    <div class="weather-field"><span class="weather-label">Location</span><span class="weather-value">${placeName}</span></div>
    <div class="weather-field"><span class="weather-label">Temperature (2m)</span><span class="weather-value">${h.temperature_2m[idx]} °C</span></div>
    <div class="weather-field"><span class="weather-label">Wind (10m)</span><span class="weather-value">${h.wind_speed_10m[idx]} km/h (${h.wind_direction_10m[idx]}°)</span></div>
    <div class="weather-field"><span class="weather-label">Gust (10m)</span><span class="weather-value">${h.wind_gusts_10m[idx]} km/h</span></div>
    <div class="weather-field"><span class="weather-label">Temperature (80m)</span><span class="weather-value">${h.temperature_80m[idx]} °C</span></div>
    <div class="weather-field"><span class="weather-label">Wind (80m)</span><span class="weather-value">${h.wind_speed_80m[idx]} km/h</span></div>
  `;
}

function handleFetch() {
  const city = cityInput.value.trim();
  if (!city) return customConsole.log("ERROR", "Please enter a city name");

  console.log("Sync Start");
  customConsole.log("SYNC", "Start");
  title.textContent = "Loading...";

  geocodeCity(city)
    .then(location => fetchWeather(location))
    .then(result => {
      console.log("[ASYNC] Data ready");
      customConsole.log("ASYNC", "Data ready");
      updateWeatherDisplay(result.weatherData, result.placeName);
      addToHistory(city);
    })
    .catch(err => {
      console.error(err);
      customConsole.log("ERROR", err.message);
      updateWeatherDisplay(null);
    })
    .finally(() => {
      title.textContent = "Async Weather Tracker";
      console.log("Sync End");
      customConsole.log("SYNC", "End");
    });
}

searchButton.addEventListener("click", handleFetch);
cityInput.addEventListener("keydown", (e) => { if (e.key === "Enter") handleFetch(); });

renderHistory();