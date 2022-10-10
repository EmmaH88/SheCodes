function isWindy(speed, unit) {
  if (speed > 5) {
    return true;
  } else {
    return false;
  }
}
let speed = prompt("what is the wind speed?");

if (isWindy(8)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}
console.log(isWindy);
