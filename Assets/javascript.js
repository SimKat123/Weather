var API ='f3e794b6f19299364c3a368c93f4e895';
var cityInput =document.getElementById('input');
var searchBtn =document.getElementById('searchBtn');
var cityName =document.getElementById('cityName');

var history =document.getElementById('oldCity');

var displayTitle =document.getElementById('cityDisplay');
var tempEl =document.getElementById('temp');
var windEl =document.getElementById('wind');
var humidEl =document.getElementById('humid');
var now =dayjs().format("MM/DD/YYYY");

var dayOne = document.getElementById("one");
var temp1El = document.getElementById("tempOne");
var wind1El = document.getElementById("windOne");
var humid1El = document.getElementById("humidOne");

var dayTwo = document.getElementById("two");
var temp2El = document.getElementById("tempTwo");
var wind2El = document.getElementById("windTwo");
var humid2El = document.getElementById("humidTwo");

var dayThree = document.getElementById("three");
var temp3El = document.getElementById("tempThree");
var wind3El = document.getElementById("windThree");
var humid3El = document.getElementById("humidThree");

var dayFour = document.getElementById("four");
var temp4El = document.getElementById("tempFour");
var wind4El = document.getElementById("windFour");
var humid4El = document.getElementById("humidFour");

var dayFive = document.getElementById("five");
var temp5El = document.getElementById("tempFive");
var wind5El = document.getElementById("windFive");
var humid5El = document.getElementById("humidFive");

// API stuff
function searchLocation(cityInput) {
    var url1 ="https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + API;
    fetch(url1)
    .then(function(requestInfo){
        // Current forecast presenting city name, date, icon
        displayTitle.innerHTML = cityInput.toUpperCase() + " " + now;
        // City added to history
        cityName.innerHTML = cityInput.toUpperCase();
        return requestInfo.json();
    }).then(function(geoData){
        console.log(geoData);
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
        dates1(weatherData.daily[1].dt);
        dates2(weatherData.daily[2].dt);
        dates3(weatherData.daily[3].dt);
        dates4(weatherData.daily[4].dt);
        dates5(weatherData.daily[5].dt);
        weather1(
            weatherData.daily[1].temp.day,
            weatherData.daily[1].wind_speed,
            weatherData.daily[1].humidity,
            weatherData.daily[1].weather[0].icon
        );
        weather2(
            weatherData.daily[2].temp.day,
            weatherData.daily[2].wind_speed,
            weatherData.daily[2].humidity,
            weatherData.daily[2].weather[0].icon
        );
        weather3(
          weatherData.daily[3].temp.day,
          weatherData.daily[3].wind_speed,
          weatherData.daily[3].humidity,
          weatherData.daily[3].weather[0].icon
        );
        weather4(
          weatherData.daily[4].temp.day,
          weatherData.daily[4].wind_speed,
          weatherData.daily[4].humidity,
          weatherData.daily[4].weather[0].icon
        );
        weather5(
          weatherData.daily[5].temp.day,
          weatherData.daily[5].wind_speed,
          weatherData.daily[5].humidity,
          weatherData.daily[5].weather[0].icon
        );
        displayIcons(weatherData.current.weather[0].icon);
    })
};

// Current forecast presenting temp, wind speed, and humidity
function displayWeatherInfo(temp, wind_speed, humidity){
    tempEl.innerHTML = "Temp: " + temp + " °F";
    windEl.innerHTML = "Wind: " + wind_speed + " MPH";
    humidEl.innerHTML = "Humidity: " + humidity + " %";
};

// search button event listener
searchBtn.addEventListener('click', function() {
    var city =cityInput.value;
    searchLocation(city);
    searchHistory(city);
})

function displayIcons(icon) {
    var url3 = "https://openweathermap.org/img/wn/" + icon +".png";
    var weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', url3);
    displayTitle.appendChild(weatherIcon);
}

// 5-day forecast presenting date, icon, temp, wind speed, and humidity
    // Date stuff for 5-day forecast
function dates1(dt) {
    var dateDT = dayjs.unix(dt).format('MM/DD/YYYY');
    dayOne.innerHTML = dateDT;
}

function dates2(dt) {
  var dateDT = dayjs.unix(dt).format("MM/DD/YYYY");
  dayTwo.innerHTML = dateDT;
}

function dates3(dt) {
  var dateDT = dayjs.unix(dt).format("MM/DD/YYYY");
  dayThree.innerHTML = dateDT;
}

function dates4(dt) {
  var dateDT = dayjs.unix(dt).format("MM/DD/YYYY");
  dayFour.innerHTML = dateDT;
}

function dates5(dt) {
  var dateDT = dayjs.unix(dt).format("MM/DD/YYYY");
  dayFive.innerHTML = dateDT;
};

    // Weather Info for 5-day forecast
function weather1(day, wind_speed, humidity, icon){
    temp1El.innerHTML = "Temp: " + day + " °F";
    wind1El.innerHTML = "Wind: " + wind_speed + " MPH";
    humid1El.innerHTML = "Humidity: " + humidity + " %";
    var url3 = "https://openweathermap.org/img/wn/" + icon + ".png";
    var weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", url3);
    dayOne.appendChild(weatherIcon);
};

function weather2(day, wind_speed, humidity, icon){
    temp2El.innerHTML = "Temp: " + day + " °F";
    wind2El.innerHTML = "Wind: " + wind_speed + " MPH";
    humid2El.innerHTML = "Humidity: " + humidity + " %";
    var url3 = "https://openweathermap.org/img/wn/" + icon + ".png";
    var weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", url3);
    dayTwo.appendChild(weatherIcon);
};

function weather3(day, wind_speed, humidity, icon){
    temp3El.innerHTML = "Temp: " + day + " °F";
    wind3El.innerHTML = "Wind: " + wind_speed + " MPH";
    humid3El.innerHTML = "Humidity: " + humidity + " %";
    var url3 = "https://openweathermap.org/img/wn/" + icon + ".png";
    var weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", url3);
    dayThree.appendChild(weatherIcon);
};

function weather4(day, wind_speed, humidity, icon){
    temp4El.innerHTML = "Temp: " + day + " °F";
    wind4El.innerHTML = "Wind: " + wind_speed + " MPH";
    humid4El.innerHTML = "Humidity: " + humidity + " %";
    var url3 = "https://openweathermap.org/img/wn/" + icon + ".png";
    var weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", url3);
    dayFour.appendChild(weatherIcon);
};

function weather5(day, wind_speed, humidity, icon){
    temp5El.innerHTML = "Temp: " + day + " °F";
    wind5El.innerHTML = "Wind: " + wind_speed + " MPH";
    humid5El.innerHTML = "Humidity: " + humidity + " %";
    var url3 = "https://openweathermap.org/img/wn/" + icon + ".png";
    var weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", url3);
    dayFive.appendChild(weatherIcon);
};

// City in history is clickable and displays the weather again
var cityHistory= JSON.parse(localStorage.getItem("cities")) || [];
function searchHisButtons() {
    history.innerHTML= "";

    for (var i=0; i < cityHistory.length; i++) {
        var searchHisItems= document.createElement("button");
        searchHisItems.classList.add("content has-text-centered");
        searchHisItems.setAttribute(cityInput, cityHistory[i]);
        searchHisItems.textContent=cityHistory[i];
        history.appendChild(searchHisItems);
    }
  }

function searchHistory(cityInput) {
    cityHistory.push(cityInput);
    localStorage.setItem("cities", JSON.stringify(cityHistory))
}