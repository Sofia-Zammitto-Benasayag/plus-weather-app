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

/* 
let city = prompt("What's your city?");
city = city.toLowerCase().trim();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  console.log(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with humidity of ${humidity}`
  );
} else {
  console.log(
    "Sorry we don't know the weather for " +
      city +
      ",try going to https://www.google.com/search?q=weather+" +
      city
  );
}

function formatDate(date) {
  /*let currentDate = new Date();*/
/*console.log(currentDate);*/

//let days = [
//"Sunday",
// "Monday",
// "Tuesday",
// "Wednesday",
//"Thursday",
//"Friday",
//"Saturday"
//];
//let currentDay = days[date.getDay()];
/*console.log(currentDay);*/

//let currentHour = date.getHours();
//if (currentHour < 10) {
// currentHour = `0${currentHour}`;
//}
//let currentMinutes = date.getMinutes();
//if (currentMinutes < 10) {
//  currentMinutes = `0${currentMinutes}`;
//}
//console.log(currentHour);
//console.log(currentMinutes);

//  return `${currentDay} ${currentHour}:${currentMinutes}`;
//}

// Search
function showTemperature(response) {
  console.log(response.data.main.temp);
  //let h1 = document.querySelector("h1");
  let currentTemp = document.querySelector("#temp");
  let searchInputTemperature = Math.round(response.data.main.temp);
  //let searchInputCity = document.querySelector("#search-input");

  //h1.innerHTML = `${searchInputCity}`;
  currentTemp.innerHTML = `${searchInputTemperature}`;
}
// in the Git clean up code by refactoring it
function searchCity(city) {
  // like this below and moving this to showTemp function so it flows easily & makes a lot of sense
  document.querySelector("h1").innerHTML = `${city}`;
  let apiKey = "f06bbc0616bd3ef71eb9f587864f4a58";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
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

/* If time equal greater than 12 p.m. or less than ... 

let time = `${currentDay} ${currentHour}:${currentMinutes} a.m. `;

if (currentMinutes < 12) {
${aMPm} = "a.m.";
} else {
  ${aMPm} = "p.m."
}
##################
let aMPm = "";

if (currentMinutes <= 12) {
  let aMPm = "a.m.";
  } else {
    let aMPm = "p.m.";
  }



*/

/*console.log(weather);

let city = prompt("What's your city?");

if (city === weather) {
  console.log(`Temperature for `);
}

console.log(
  `It is currently 19°C (66°F) in (Paris["temp"]) with a humidity of (Paris["humidity"])%`
); */

/* 
(paris.Math.round[temp])

*/

/*

function showWeather(city) {
  alert(`Temperature on ${city} is 18 degrees`);
}

weather.forEach(city);

function showTemperature(day) {
  alert(`Temperature on ${day} is 18 degrees`);
}

weekDays.forEach(showTemperature); */
