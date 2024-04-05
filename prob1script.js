document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let city = document.getElementById("cityInput").value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'ec4be0ff7f0c4d5b83213833240504';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data.current);
            displayForecast(data.forecast.forecastday);
        })
}

function displayCurrentWeather(currentWeather) {
    const currentWeatherDiv = document.getElementById("currentWeather");
    currentWeatherDiv.innerHTML = `
        <h2>${currentWeather.temp_c}°C, ${currentWeather.condition.text}</h2>
        <p>Humidity: ${currentWeather.humidity}%</p>
    `;
}

function displayForecast(forecastDays) {
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    forecastDays.forEach(day => {
        forecastDiv.innerHTML += `
            <div class="forecast-day">
                <h3>${day.date}</h3>
                <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
                <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                <p>Min Temp: ${day.day.mintemp_c}°C</p>
            </div>
        `;
    });
}
