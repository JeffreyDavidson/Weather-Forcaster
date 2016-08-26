//Print out message
function printMessage(zipCode, weather) {
	var message = "It will be a " + weather.daily.summary + " This is based off your " + zipCode + " zipcode which is aproximately (" + weather.latitude + ", " + weather.longitude + ").";
	console.log(message);
}

//Print out error messages
function printError(error) {
	console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
