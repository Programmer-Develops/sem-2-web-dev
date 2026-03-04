const API_KEY = "e8271fd7cb3349939f254830260203";

const cityInput = document.getElementById("city");
const searchButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weatherDisplay");
const historyContainer = document.getElementById("history");
const consoleOutput = document.getElementById("consoleOutput");
const title = document.getElementById("title");

let searchHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];

const customConsole = {
  logs: [],
  log(type, message) {
    const logEntry = `📍 ${type} ${message}`;
    this.logs.push({ type, message: logEntry });
    this.render();
  },
  render() {
    consoleOutput.innerHTML = this.logs
      .map(
        (log) => `<div class="console-log ${log.type.toLowerCase()}">${log.message}</div>`
      )
      .join("");
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  },
};

function renderHistory() {
  historyContainer.innerHTML = searchHistory
    .map(
      (city) =>
        `<div class="history-tag" onclick="searchCityFromHistory('${city}')">${city}</div>`
    )
    .join("");
}

window.searchCityFromHistory = function (city) {
  cityInput.value = city;
  handleFetch();
};

function addToHistory(city) {
  if (!searchHistory.includes(city)) {
    searchHistory.unshift(city);
    if (searchHistory.length > 5) {
      searchHistory.pop();
    }
    localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
    renderHistory();
  }
}

function getWeather(address) {
  const API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}`;

  console.log("Sync Start");
  customConsole.log("SYNC", "Start");

  console.log("[ASYNC] Start fetching");
  customConsole.log("ASYNC", "Start fetching");

  fetch(API)
    .then(function(response) {
      console.log("Promise.then (Microtask)");
      customConsole.log("PROMISE", "Promise.then (Microtask)");
      return response.json();
    })
    .then(function(data) {
      console.log("setTimeout (Macrotask)");
      customConsole.log("PROMISE", "setTimeout (Macrotask)");

      if (data.error) {
        console.log(`Error: ${data.error.message}`);
        customConsole.log("ERROR", data.error.message);
        updateWeatherDisplay(null);
        return;
      }

      console.log("[ASYNC] Data received");
      customConsole.log("ASYNC", "Data received");
      title.textContent = "Async Weather Tracker";

      updateWeatherDisplay(data);
      addToHistory(address);
    })
    .catch(function(error) {
      console.log(`Error: ${error.message}`);
      customConsole.log("ERROR", error.message);
      updateWeatherDisplay(null);
    })
    .finally(function() {
      console.log("Sync End");
      customConsole.log("SYNC", "End");
    });
}

function updateWeatherDisplay(data) {
  if (!data) {
    weatherDisplay.innerHTML = `
      <div class="weather-field">
        <span class="weather-label">City</span>
        <span class="weather-value">-</span>
      </div>
      <div class="weather-field">
        <span class="weather-label">Temp</span>
        <span class="weather-value">-</span>
      </div>
      <div class="weather-field">
        <span class="weather-label">Weather</span>
        <span class="weather-value">-</span>
      </div>
      <div class="weather-field">
        <span class="weather-label">Humidity</span>
        <span class="weather-value">-</span>
      </div>
      <div class="weather-field">
        <span class="weather-label">Wind</span>
        <span class="weather-value">-</span>
      </div>
    `;
    return;
  }

  weatherDisplay.innerHTML = `
    <div class="weather-field">
      <span class="weather-label">City</span>
      <span class="weather-value">${data.location.name}, ${data.location.region}</span>
    </div>
    <div class="weather-field">
      <span class="weather-label">Temp</span>
      <span class="weather-value">${data.current.temp_c}°C</span>
    </div>
    <div class="weather-field">
      <span class="weather-label">Weather</span>
      <span class="weather-value">${data.current.condition.text}</span>
    </div>
    <div class="weather-field">
      <span class="weather-label">Humidity</span>
      <span class="weather-value">${data.current.humidity}%</span>
    </div>
    <div class="weather-field">
      <span class="weather-label">Wind</span>
      <span class="weather-value">${data.current.wind_kph} kph</span>
    </div>
  `;
}

function handleFetch() {
  const city = cityInput.value.trim();
  if (city) {
    title.textContent = "Loading..."
    getWeather(city);
  } else {
    console.log("Please enter a city name");
    customConsole.log("ERROR", "Please enter a city name");
  }
}

searchButton.addEventListener("click", handleFetch);
cityInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleFetch();
  }
});

renderHistory();

