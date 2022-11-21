var API ='f3e794b6f19299364c3a368c93f4e895';
var cityInput =document.getElementById('input');
var searchBtn =document.getElementById('searchBtn');
var history =document.getElementById('oldCity');
var cityName =document.getElementById('cityName');
var displayTitle =document.getElementById('cityDisplay');
var tempEl =document.getElementById('temp');
var windEl =document.getElementById('wind');
var humidEl =document.getElementById('humid');
var now =dayjs().format("MM/DD/YYYY");
var weatherIcon = document.getElementById('icons');

// API stuff
function searchLocation(cityInput) {
    var url1 ="http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + API;
    fetch(url1)
    .then(function(requestInfo){
        // Current forecast presenting city name, date, icon
        displayTitle.innerHTML = cityInput.toUpperCase() + " " + now;
        // City added to history
        cityName.innerHTML = cityInput.toUpperCase();
        return requestInfo.json();
    })
    .then(function(geoData){
        searchWeather(geoData[0].lat, geoData[0].lon);
    })
};

function searchWeather(lat, lon){
    var url2 ="https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API +"&units=imperial";
    fetch(url2)
    .then(function(requestInfo){
        return requestInfo.json()
    })
    .then(function (weatherData) {
        console.log(weatherData);
        displayWeatherInfo(weatherData.current.temp, weatherData.current.wind_speed, weatherData.current.humidity);
        displayIcons(weatherData.current.clouds);
    })
};

// Current forecast presenting temp, wind speed, and humidity
function displayWeatherInfo(temp, wind_speed, humidity){
    tempEl.innerHTML = "Temp: " + temp + " °F";
    windEl.innerHTML = "Wind: " + wind_speed + " MPH";
    humidEl.innerHTML = "Humidity: " + humidity + " %";
};

searchBtn.addEventListener('click', function() {
    var city =cityInput.value;
    searchLocation(city);
})

function displayIcons(clouds) {
    if (clouds === 0) {
        weatherIcon.classList.add(" fa-sharp fa-solid fa-sun");
    } else if (clouds !== 0) {
        weatherIcon.classList.add(" fa-sharp fa-solid fa-clouds");
    }
    
}
// 5-day forecast presenting date, icon, temp, wind speed, and humidity


// City in history is clickable and displays the weather again