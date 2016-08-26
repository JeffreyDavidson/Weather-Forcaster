var http = require("http");
var https = require("https");
var printer = require("./printer.js");
var config = require('./config');

var apiKey = config.forcastio.apiKey;

// Retrieves coordinates from given zip code from user.
function getCoordinates(zipCode) {
	var request = http.get("http://api.zippopotam.us/us/" + zipCode, function(response) {
		var body = "";
		//Read the data
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			var location = JSON.parse(body);
			getWeather(zipCode, location);
		});
	});

	request.on("error", printer.printError);
}

// Retrieves weather summary from given location coordinates.
function getWeather(zipCode, location) {
	var request = https.get("https://api.forecast.io/forecast/" + apiKey + "/" + location.places[0].latitude + "," + location.places[0].longitude, function(response) {
		var body = "";
		//Read the data
		response.on('data', function(chunk) {
			body += chunk;
		});

		response.on('end', function() {
			var weather = JSON.parse(body);
			printer.printMessage(zipCode, weather);
		})

	}); 	
	request.on("error", printer.printError);
}

module.exports.getWeather = getCoordinates;
