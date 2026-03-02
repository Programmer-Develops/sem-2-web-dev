const API_KEY = "e8271fd7cb3349939f254830260203";
const root = document.getElementById("root");

// fetch weather data for a given address using async/await
async function getWeather(address) {
    const API = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}`;
    try {
        root.innerHTML = `<p>Loading weather for ${address}...</p>`;
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
            root.innerHTML = `<p>${data.error.message}</p>`;
            return;
        }
        root.innerHTML = `
            <h3>Weather in ${data.location.name}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    } catch (error) {
        root.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}

// wire up button click to call getWeather with the user-entered city
const button = document.getElementById("getWeather");
const cityInput = document.getElementById("city");

function handleFetch() {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        root.innerHTML = `<p>Please enter a city name.</p>`;
    }
}

button.addEventListener("click", handleFetch);

// allow pressing Enter in the input to trigger fetching
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleFetch();
    }
});

