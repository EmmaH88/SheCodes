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

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ];

  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  let date = today.getDate();
  let hours = today.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let li = document.querySelector("li#date");
  li.innerHTML = ` 🗓️ ${day}, ${hours}:${minutes}`;
  return date;
}
formatDate();

function newCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city").value;
  inputCity = inputCity.toLowerCase();
  inputCity = inputCity.trim();
  let newCity = document.querySelector("#city");
  newCity.innerHTML = `🌆${inputCity}`;
}
let searchBox = document.querySelector("#search-box");
searchBox.addEventListener("submit", newCity);

function convertToFahrenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = temperatureElement.innerHTML = Math.round(
    (temperature * 9) / 5 + 32
  );
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
