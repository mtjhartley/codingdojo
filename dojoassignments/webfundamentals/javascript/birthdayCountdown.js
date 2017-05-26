var daysUntilMyBirthday = 60;

function birthdayCountdown(daysUntilBirthday) {
	while (daysUntilBirthday !== 0) {
		if (daysUntilBirthday > 30) {
			console.log(daysUntilBirthday + " days until my birthday. Such a long time... :(")
		}
		else if (daysUntilBirthday > 5) {
			console.log(daysUntilBirthday + " days until my birthday!! It's gonna rock!!")
		}
		else if (daysUntilBirthday > 0) {
			console.log("ONLY " + daysUntilBirthday + " LEFT UNTIL MY BIRTHDAY!!!")
		}
		daysUntilBirthday -= 1
	}
	console.log("IT'S MY BIRTHDAY!!!! LET'S RIDE!!!!")
}

birthdayCountdown(daysUntilMyBirthday)



