const API_KEY = "e8271fd7cb3349939f254830260203";
const root = document.getElementById("root");

const title = document.getElementById("title");

async function getWeather(address) {
    const API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}`;
    try {
        root.innerHTML = `<p>Loading weather for ${address}...</p>`;
        root.innerHTML = `<p class="loading">Loading weather for ${address}...</p>`;
        title.textContent = "Loading Weather Data..."

        fetch(API)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Server returned ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    root.innerHTML = `<p class="error">${data.error.message}</p>`;
                    return;
                }
                root.innerHTML = `
                    <h3>Weather in ${data.location.name}</h3>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Condition: ${data.current.condition.text}</p>
                `;
            })
            .catch((error) => {
                root.innerHTML = `<p class="error">Error fetching weather data: ${error.message}</p>`;
            })
            .finally(() => {
                console.log('fetch completed for', address);
                title.textContent = "Async Weather Tracker"
            });
    } catch (error) {
        root.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        title.textContent = "Error"
    }
}

const button = document.getElementById("getWeather");
const cityInput = document.getElementById("city");

function handleFetch() {
    const city = cityInput.value.trim(); // getting the city name from the input and trim any extra whitespace
    if (city) {
        getWeather(city);
    } else {
        root.innerHTML = `<p>Please enter a city name.</p>`;
    }
}

button.addEventListener("click", handleFetch);

cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleFetch();
    }
});

