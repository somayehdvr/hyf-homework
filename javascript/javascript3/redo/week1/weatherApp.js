document.querySelector(".submitCityButton").addEventListener("click", () => fetchWeatherData())
const weatherDataDiv = document.querySelector(".weatherDataDiv")

function fetchWeatherData() {
    const city = document.querySelector(".city").value
    if (!city) { city = "copenhagen" }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85bf3bafaf784a301c66129107680db7`)
        .then(response => response.json())
        .then(weatherData => {
            weatherDataDiv.innerHTML = `
            <h1> Weather in the ${city} city </h1>
            <h3>

                <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"> <br /> 
                temp: ${weatherData.main.temp} F <br />
                temp_max: ${weatherData.main.temp_max} F <br />
                temp_min: ${weatherData.main.temp_min} F <br />
                feels_like: ${weatherData.main.feels_like} F <br />
                humidity: ${weatherData.main.humidity} <br />
                pressure: ${weatherData.main.pressure} <br />
                Wind speed: ${weatherData.wind.speed} <br />
                How clowdy: ${weatherData.clouds.all}% <br /> 
                sunrise: ${new Date(weatherData.sys.sunrise).toLocaleTimeString()} <br /> 
                sunset: ${new Date(weatherData.sys.sunset).toLocaleTimeString()}

            </h3>
            `
        })
}