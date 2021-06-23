document.querySelector(".submitCity").addEventListener("click", () => printWeather())

function printWeather() {
    const weather = document.querySelector(".weather")
    //loading 
    weather.innerHTML = "loading..."
    
    const city = document.querySelector(".city").value

    // Fetch weather json data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85bf3bafaf784a301c66129107680db7`)
        .then(response => response.json())
        .then(weatherData => {
            weather.innerHTML = `city: ${city} , <br /> 
            temperature: ${weatherData.main.temp} F ${weatherData.weather[0].description}, <br /> 
            Icon for the weather type: <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"> , <br /> 
            Wind speed: ${weatherData.wind.speed} <br /> 
            How clowdy it is: ${weatherData.clouds.all}% <br /> 
            sunrise is: ${weatherData.sys.sunrise} and sunset is: ${weatherData.sys.sunset}`
        });
}
