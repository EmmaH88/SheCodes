function formatDate() {
  let today = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[today.getDay()];
  let date = today.getDate();
  let hours = today.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let h2 = document.querySelector("h2#date");
  h2.innerHTML = ` 🗓️ ${day}, ${hours}:${minutes}`;
  return date;
}
formatDate();

function showTemperature(response) {
  console.log(response.data.name);

  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#temperature-description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function newSearch(event) {
  event.preventDefault();

  let city = document.querySelector("#input-city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-box");
searchForm.addEventListener("submit", newSearch);

function searchLocation(position) {
  let apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#button-location");
currentLocation.addEventListener("click", getCurrentLocation);

searchCity("castleford");
