const cityInput = document.getElementById("city");
const searchButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weatherDisplay");
const historyContainer = document.getElementById("history");
const consoleOutput = document.getElementById("consoleOutput");
const title = document.getElementById("title");

let searchHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];

const customConsole = {
  logs: [],
  log: function(type, message) {
    var logEntry = "📍 " + type + " " + message;
    this.logs.push({ type: type, message: logEntry });
    this.render();
  },
  render: function() {
    consoleOutput.innerHTML = this.logs
      .map(function(log) {
        return '<div class="console-log ' + log.type.toLowerCase() + '">' + log.message + '</div>';
      })
      .join("");
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
};

function renderHistory() {
  historyContainer.innerHTML = searchHistory
    .map(function(city, index) {
      return (
        '<div class="history-tag">' +
          '<span onclick="searchCityFromHistory(\'' + city.replace(/'/g, "\\'") + '\')">' + city + '</span>' +
          '<span class="delete-btn" onclick="removeFromHistory(' + index + ')">×</span>' +
        '</div>'
      );
    })
    .join("");
}

window.searchCityFromHistory = function(city) {
  cityInput.value = city;
  handleFetch();
};

window.removeFromHistory = function(index) {
  if (index >= 0 && index < searchHistory.length) {
    var removedCity = searchHistory[index];
    searchHistory.splice(index, 1);
    localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
    renderHistory();
    customConsole.log("HISTORY", "Removed: " + removedCity);
  }
};

function addToHistory(city) {
  if (searchHistory.indexOf(city) === -1) {
    searchHistory.unshift(city);
    if (searchHistory.length > 5) {
      searchHistory.pop();
    }
    localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
    renderHistory();
    customConsole.log("HISTORY", "Added: " + city);
  }
}

function geocodeCity(city, callback) {
  var url = "https://geocoding-api.open-meteo.com/v1/search?name=" + 
            encodeURIComponent(city) + 
            "&count=1&language=en&format=json";

  customConsole.log("GEOCODE", "Searching for \"" + city + "\"...");

  fetch(url)
    .then(function(response) {
      if (!response.ok) throw new Error("Geocode failed: HTTP " + response.status);
      return response.json();
    })
    .then(function(data) {
      if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
      }
      var best = data.results[0];
      customConsole.log("GEOCODE", "Found: " + best.name + ", " + (best.admin1 || "") + 
                        " (" + best.latitude + ", " + best.longitude + ")");
      callback({
        lat: best.latitude,
        lon: best.longitude,
        displayName: best.name + (best.admin1 ? ", " + best.admin1 : "")
      });
    })
    .catch(function(err) {
      customConsole.log("ERROR", "Geocoding failed: " + err.message);
      callback(null);
    });
}

function fetchWeather(lat, lon, callback) {
  var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon +
            "&hourly=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m" +
            ",temperature_80m,wind_speed_80m,wind_direction_80m" +
            "&forecast_days=1&timezone=auto";

  customConsole.log("FETCH", "Requesting Open-Meteo forecast...");

  fetch(url)
    .then(function(response) {
      if (!response.ok) throw new Error("Forecast failed: HTTP " + response.status);
      return response.json();
    })
    .then(function(data) {
      if (data.error) throw new Error(data.reason || "API error");
      customConsole.log("FETCH", "Data received");
      callback(data);
    })
    .catch(function(err) {
      customConsole.log("ERROR", "Forecast fetch failed: " + err.message);
      callback(null);
    });
}

function getCurrentHourlyIndex(hourly) {
  var now = new Date();
  var times = hourly.time || [];
  var closestIndex = 0;
  var smallestDiff = Infinity;

  for (var i = 0; i < times.length; i++) {
    var diff = Math.abs(new Date(times[i]) - now);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestIndex = i;
    }
  }
  return closestIndex;
}

function updateWeatherDisplay(data, placeName) {
  if (!data || !data.hourly) {
    weatherDisplay.innerHTML = 
      '<div class="weather-field"><span class="weather-label">Location</span><span class="weather-value">-</span></div>' +
      '<div class="weather-field"><span class="weather-label">Temperature (2m)</span><span class="weather-value">-</span></div>' +
      '<div class="weather-field"><span class="weather-label">Wind (10m)</span><span class="weather-value">-</span></div>' +
      '<div class="weather-field"><span class="weather-label">Gust (10m)</span><span class="weather-value">-</span></div>' +
      '<div class="weather-field"><span class="weather-label">Temperature (80m)</span><span class="weather-value">-</span></div>';
    return;
  }

  var idx = getCurrentHourlyIndex(data.hourly);
  
  var temp2m  = data.hourly.temperature_2m  ? data.hourly.temperature_2m[idx]  : "-";
  var wind10m = data.hourly.wind_speed_10m ? data.hourly.wind_speed_10m[idx] : "-";
  var gust10m = data.hourly.wind_gusts_10m ? data.hourly.wind_gusts_10m[idx] : "-";
  var dir10m  = data.hourly.wind_direction_10m ? data.hourly.wind_direction_10m[idx] : "-";
  var temp80m = data.hourly.temperature_80m ? data.hourly.temperature_80m[idx] : "-";
  var wind80m = data.hourly.wind_speed_80m ? data.hourly.wind_speed_80m[idx] : "-";

  weatherDisplay.innerHTML = 
    '<div class="weather-field"><span class="weather-label">Location</span><span class="weather-value">' + (placeName || "Unknown") + '</span></div>' +
    '<div class="weather-field"><span class="weather-label">Temperature (2m)</span><span class="weather-value">' + temp2m + ' °C</span></div>' +
    '<div class="weather-field"><span class="weather-label">Wind (10m)</span><span class="weather-value">' + wind10m + ' km/h' + 
      (dir10m !== "-" ? ' (' + dir10m + '°)' : '') + '</span></div>' +
    '<div class="weather-field"><span class="weather-label">Gust (10m)</span><span class="weather-value">' + gust10m + ' km/h</span></div>' +
    '<div class="weather-field"><span class="weather-label">Temperature (80m)</span><span class="weather-value">' + temp80m + ' °C</span></div>' +
    '<div class="weather-field"><span class="weather-label">Wind (80m)</span><span class="weather-value">' + wind80m + ' km/h</span></div>';
}

function getWeather(address) {
  console.log("Sync Start");
  customConsole.log("SYNC", "Start");

  title.textContent = "Loading...";

  geocodeCity(address, function(location) {
    if (!location) {
      title.textContent = "Async Weather Tracker";
      updateWeatherDisplay(null);
      console.log("Sync End (geocode failed)");
      customConsole.log("SYNC", "End");
      return;
    }

    fetchWeather(location.lat, location.lon, function(forecastData) {
      console.log("[ASYNC] Data ready");
      customConsole.log("ASYNC", "Data ready");

      title.textContent = "Async Weather Tracker";

      updateWeatherDisplay(forecastData, location.displayName);
      addToHistory(address);

      console.log("Sync End");
      customConsole.log("SYNC", "End");
    });
  });
}

function handleFetch() {
  var city = cityInput.value.trim();
  if (!city) {
    customConsole.log("ERROR", "Please enter a city name");
    return;
  }
  getWeather(city);
}

searchButton.addEventListener("click", handleFetch);
cityInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleFetch();
  }
});

renderHistory();