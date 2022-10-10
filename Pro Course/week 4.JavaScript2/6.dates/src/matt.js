let currentTime = new Date();

// challenge 1
console.log(currentTime);

//challenge 2
console.log(currentTime.getMilliseconds());

//challenge 3
console.log(currentTime.getDay());
// challenge 4
console.log(currentTime.getFullYear());

// challenge 5
console.log(currentTime.getMonth());
// challenge 6 + 7
function formatDate(date) {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
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
    "December",
  ];
  let currentYear = date.getFullYear();
  let currentDay = day[date.getDay()];
  let currentMonth = month[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay} ${currentDate} ${currentMonth}, ${currentYear}`;
  return formattedDate;
}
let date = new Date("1967/06/06");
console.log(formatDate(date));
