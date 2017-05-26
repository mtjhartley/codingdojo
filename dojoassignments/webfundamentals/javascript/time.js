var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function tellTime(hour, minute, period) {
	if (minute >= 30) {
		var minuteString = "almost"
		hour = hour + 1
	}
	else {
		var minuteString = "just after"
	}
	if (period === 'AM') {
		var periodString = "in the morning."
	}
	else {
		var periodString = "in the evening."
	}
	console.log("It's " + minuteString + " " +hour + " " + periodString)
}

tellTime(HOUR, MINUTE, PERIOD)

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

tellTime(HOUR, MINUTE, PERIOD)