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
  let year = today.getFullYear();
  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  let date = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  let li = document.querySelector("li#date");
  li.innerHTML = `${day} ${month}, ${hours}:${minutes}`;
  return date;
}
formatDate();

function newCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city").value;
  inputCity = inputCity.toLowerCase();
  inputCity = inputCity.trim();
  let newCity = document.querySelector("#city");
  newCity.innerHTML = `${inputCity}`;
}
let searchBox = document.querySelector("#search-box");
searchBox.addEventListener("submit", newCity);

function measure(event) {
  event.preventDefault();

  let celsius = document.querySelector("#celsius");
  celsius.innerHTML = `30 ${fahrenheit}`;
}
let change = document.querySelector("#celsius");
measure.addEventListener("click", fahrenheit);
