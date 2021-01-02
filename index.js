let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};



// Search
function showTemperature(response) {
  console.log(response.data.main.temp);
  let currentTemp = document.querySelector("#temp");
  let searchInputTemperature = Math.round(response.data.main.temp);

  let description = response.data.weather[0].description;
  document.querySelector("h3").innerHTML = `${description}`;
 
  let iconElement = document.querySelector("#icon");
  let icon = response.data.weather[0].icon;
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  iconElement.setAttribute("alt", `${description}`);
  currentTemp.innerHTML = `${searchInputTemperature}`;
}
function formatDate(timestamp) {
  let date = new Date(timestamp);
console.log(currentDate);

let days = [
"Sunday",
 "Monday",
"Tuesday",
 "Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let day = days[date.getDay()];
return `${day} ${formatHours(timestamp)} `;
}

function formatHours(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
if (hours < 10) { hours = `0${hours}`;}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;}
return ` ${hours}:${minutes}`;
}

function displayForecast(response){
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
  
  for (let index = 0; index < 6; index++) {
    
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tueday</h5>
                <p>${formatHours(forecast.dt * 1000)}</p>
                <p class="card-text">
                  <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="" />
                  <br />
  
                  ${Math.round(forecast.main.temp_max)} ° <span class="grayed-out"> ${Math.round(forecast.main.temp_min)}° </span>
                </p>
              </div>
            </div>
          </div>
    `;
    
  }

  
}
// in the Git clean up code by refactoring it
function searchCity(city) {
  // like this below and moving this to showTemp function so it flows easily & makes a lot of sense
  document.querySelector("h1").innerHTML = `${city}`;
  let apiKey = "f06bbc0616bd3ef71eb9f587864f4a58";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);
}
function search(event) {
  event.preventDefault();
  //let city = document.querySelector("h1");
  //city.innerHTML = `${searchInput.value}`;
  //let h1 = document.querySelector("h1");
  let city = document.querySelector("#search-input").value;
  searchCity(city);
  //let searchInputCity = document.querySelector("#search-input");
  //let city = `${searchInputCity.value}`;
  //h1.innerHTML = `${city}`;
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", search);

searchCity("California");
// Current Location
function showCurrentLocationTemp(reply) {
  console.log(reply);
  let currentLocationTemp = Math.round(reply.data.main.temp);
  let currentLocationCity = reply.data.name;
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${currentLocationCity}`;
  let currentDescription = reply.data.weather[0].description;
  let description = document.querySelector("h3");
  description.innerHTML = `${currentDescription}`;
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = `${currentLocationTemp}`;
}
function position(currentPosition) {
  console.log(currentPosition);
  let lat = currentPosition.coords.latitude;
  let lon = currentPosition.coords.longitude;
  let apiKey = `f06bbc0616bd3ef71eb9f587864f4a58`;
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lang=fr&lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCurrentLocationTemp);
}
function getCurrentLocation(click) {
  navigator.geolocation.getCurrentPosition(position);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// F link changes
function changeToFahrenehit() {
  let displayFahrenheit = document.querySelector("#temp");
  let temperature = displayFahrenheit.innerHTML;
  temperature = Number(temperature);
  displayFahrenheit.innerHTML = Math.round((temperature * 9) / 5 + 32);

  /*let fahrenheitTemp = document.querySelector("#temp");*/
  /*let celsiusTemp = -4;*/
  /*let fahrenheitResult = Math.round((celsiusTemp * 9) / 5 + 32);*/
  /*displayFahrenheit.innerHTML = `${fahrenheitResult}`;*/
}
//?
function showCurrentTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let currentLocation = response.data.name;
  let heading = document.querySelector("h1");
  heading.innerHTML = `It's ${currentTemperature} degrees in ${currentLocation} `;
  console.log(response);
}
// C link changes
function changeToCelsius() {
  /*let celsiusTemp = document.querySelector("#temp");*/
  let displayCelsius = document.querySelector("#temp");
  let fahrenheitTemp = 24.8;
  let celsiusResult = Math.round(((fahrenheitTemp - 32) * 5) / 9);
  displayCelsius.innerHTML = `${celsiusResult}`;
}
/*
// Changes to current day
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);*/

// Switches
let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");

fahrenheit.addEventListener("click", changeToFahrenehit);

celsius.addEventListener("click", changeToCelsius);

 
