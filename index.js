
// Search
function showTemperature(response) {
  console.log(response);

  let humidityElement = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `Humidity: ${humidityElement}%`;

  let windElement = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `Wind: ${windElement} km/h`;

  let feelslikeElement = Math.round(response.data.main.feels_like);
  document.querySelector("#feels-like").innerHTML = `Feels like: ${feelslikeElement}`;

  console.log(response.data.main.temp);
  celsiusTemperature = response.data.main.temp;
  let currentTemp = document.querySelector("#temperature");
  let searchInputTemperature = Math.round(celsiusTemperature);

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
  console.log(response);
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
  
  for (let index = 0; index < 6; index++) {
    
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
            <div class="card">
              <div class="card-body">
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

function searchCity(city) {
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
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}


// Current Location
function showCurrentLocationTemp(reply) {
  console.log(reply);

  let currentHumidity = reply.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `Humidity: ${currentHumidity}%`;

  let currentWind = Math.round(reply.data.wind.speed);
  document.querySelector("#wind").innerHTML = `Wind: ${currentWind} km/h`;

  let currentFeelslike = Math.round(reply.data.main.feels_like);
  document.querySelector("#feels-like").innerHTML = `Feels like: ${currentFeelslike}`;



  let currentLocationTemp = Math.round(reply.data.main.temp);
  let currentLocationCity = reply.data.name;
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${currentLocationCity}`;
  let currentDescription = reply.data.weather[0].description;
  let description = document.querySelector("h3");
  description.innerHTML = `${currentDescription}`;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${currentLocationTemp}`;

let currentIconElement = document.querySelector("#icon");
let currentIcon = reply.data.weather[0].currentIcon;


let apiKey = `f06bbc0616bd3ef71eb9f587864f4a58`;
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentLocationCity}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayForecast);



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


function showCurrentTemperature(response) {
  
  console.log(response.data.main.temp);
  let currentTemperature = Math.round(response.data.main.temp);
  let currentLocation = response.data.name;
  let heading = document.querySelector("h1");
  heading.innerHTML = `It's ${currentTemperature} degrees in ${currentLocation} `;
  console.log(response);
}


function displayFahrenheitTemperature(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
event.preventDefault();
celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

searchCity("California");

