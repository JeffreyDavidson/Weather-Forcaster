//Problem: We need a way that we can take a zip code and look up that zip code's weather for the day.
//Solution: Utilize Node.js to connect to Forcast.io's API to retreive zip code's weather to print out.
var location = require("./forcast.js");

var zipCode = process.argv.slice(2);

location.getWeather(zipCode);
