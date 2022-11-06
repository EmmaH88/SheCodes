let country = "Guinea Bissau";
country = country.replace("Guinea Bissau", "Guinea-Bissau");
console.log(country);

let city = " Sydney   ";
city = city.trim();
console.log(city);

let place = "School";
place = place.toUpperCase();
console.log(place);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let sentence = `I went to vist the ${attraction} in ${city} right next to my ${place}. Now i'm getting ready for my trip to ${country}!`;
console.log(sentence);
