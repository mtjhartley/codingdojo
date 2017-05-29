function sigma(num) {
	var total = 0;
	for (var x = 1; x <= num; x++) {
		total += x
	}
	return total;
}

console.log(sigma(3)) //should print 6 to the console

function factorial(num) {
	var total = 1;
	for (var x = 2; x <= num; x++) {
		total *= x
	}
	return total;
}

console.log(factorial(5)) // should print 120 to the console. 

function drawLeftStars(num) {
	var string = "";
	for (var x = 1; x <= num; x++) {
		string += "*"
	}
	return string
}

console.log(drawLeftStars(5)) // should print *****

function drawRightStars(num) {
	var string = "";
	for (var x=1; x <= 75; x++) { 
		if (x < (75-num)) {
			string += "0"
		}
		else {
			string += "*"
		}
	}
	return string
}

console.log(drawRightStars(10)) //should print a row of 0's, ending with 10 *


function drawCenteredStars(num) {
	var addStars = " ";
	var counter = 0;
	var counter2 = 0;
	for (var i = 0; i <= Math.floor((75-num)/2);i++) {
		addStars += " ";
		if (i == Math.floor((75-num)/2)) {
			while (counter < num) {
				counter++;
				addStars += "*"
			}
		if (counter == num) {
			while (counter2 < (75-i-counter)) {
				counter2++;
				addStars += " ";
			}
		}
		} 
	}
	return addStars;
}

console.log(drawCenteredStars(20))

function threesFives() {
	var sum = 0;
	for (var x = 100; x < 4000000; x++) {
		if (x % 3 === 0 && x % 5 === 0) {
			sum += x
		}
	} return sum
}

console.log(threesFives())

function betterThreesFives(start, end) {
	var sum = 0; 
	for (var x = start; x < end; x++) {
		if (x % 3 === 0 && x % 5 === 0) {
			sum +=x
		}
	} return sum
}

console.log(betterThreesFives(100, 4000000))

function generateCoinChange(cents) {
	var quarters = 0
	var dimes = 0
	var nickels = 0
	var pennies = 0
	console.log(cents + " cents can be represented by: ")
	while (cents !== 0) {
		//quarters block of code
		quarters = Math.floor(cents/25)
		cents = cents - (quarters * 25)

		dimes = Math.floor(cents/10)
		cents = cents - (dimes * 10)

		nickels = Math.floor(cents/5)
		cents = cents - (nickels * 5)

		pennies = cents
		var totalCoins = quarters + dimes + nickels + pennies
		cents = 0; //exit the loop logically
	}
	console.log("Quarters: " + quarters)
	console.log("Dimes: " + dimes)
	console.log("Nickels: " + nickels)
	console.log("Pennies: " + pennies)
	console.log("Total # of coins = " + totalCoins)
}

generateCoinChange(75)
generateCoinChange(85)
generateCoinChange(80)
generateCoinChange(99)

function messyMath(num) {
	var sum = 0;
	for (var x = 0; x <= num; x++) {
		if (num/3 === x && sum !== 0) {
			return -1
		}
		else if (x % 3 === 0) {
			continue

		}
		else if (x % 7 === 0) {
			sum += (x*2)
		}
		else {
			sum += x;
		}
	} return sum
}

console.log(messyMath(4))
console.log(messyMath(8))
console.log(messyMath(15))

function twelveBarBlues() {
	var count = 1
	while (count <= 12) {
		console.log(count)
		console.log("chick")
		console.log("boom")
		console.log("chick")
		count++;
	}
}

twelveBarBlues();

/* time complexity is pretty high...
could memoitize but beyond the scope right now and
not positive on implementation */
function fibonacci(index) {
	if (index === 0) {
		return 0;
	} else if (index === 1) {
		return 1;
	} else {
		return fibonacci(index - 1) + fibonacci(index - 2)
	}
}

console.log(fibonacci(7)) // should be 13


/*this function will take a number and add 
up each individual digit i.e. 928 -> 19 */
function sumToOneDigit(num) {
	var total = 0;
	while (num > 9) {
		total += (num % 10) // should get the last digit
		num = Math.floor(num / 10) // should 
	}
	return total + num; // final ones digit adding
}

console.log(sumToOneDigit(928))
console.log(sumToOneDigit(111))
console.log(sumToOneDigit(101))



function isPrime(num) {
	if (num === 2 || num === 3) {
		return true
	} else if (num % 2 === 0) {
		return false
	}
	else if (num === 1) {
		return false
	} else {
		for (var x = 3; x < num - 1; x+=2) {
			if (num % x === 0) {
				return false
			} else {
				return true
			}
		}
	}
}

console.log(isPrime(2)) //true
console.log(isPrime(1)) //false
console.log(isPrime(3)) //true
console.log(isPrime(4)) //false
console.log(isPrime(5)) //true
console.log(isPrime(13)) //true
console.log(isPrime(17)) //true
console.log(isPrime(15)) //false
console.log(isPrime(419)) // true

function extractDigit(num, digitNum) {
	while (digitNum) {
		num = Math.floor(num / 10)
		digitNum--;
	} return num % 10 
}


console.log(extractDigit(1824, 2)) // returns 8
console.log(extractDigit(1824, 0)) //returns 4
console.log(extractDigit(1824, 1)) //returns 2
console.log(extractDigit(1824, 5)) //returns 0

function mostSignificantDigit(num) {
	if (num < 1 && num > -1) {
		while (num < 1 && num > -1) {
			num *= 10
		}
	} else if (num > 9) {
		while (num > 9) {
			num /= 10
		}

	} else if (num < -9) {
		while (num < -9) {
			num /= 10
		}
	} return Math.trunc(num)
}


console.log(mostSignificantDigit(344.343))
console.log(mostSignificantDigit(.00874))
console.log(mostSignificantDigit(-344))

/* Gaming Fundamentals, page 34 of algo book */

console.log("Gaming Fundamentals")

function rollone() {
	return Math.floor(Math.random() * 6) + 1 
}

function playFives(num) {
	for (var x = 1; x <= num; x++) {
		var randomNumber = rollone()
		console.log(randomNumber)
		if (randomNumber === 5) {
			console.log("That's good luck!")
		}
	}
}

playFives(10)

function playStatistics() {
	var min = 1000; //Don't like doing this, only if I am confident of the output of the function. 
	var max = -1;
	var count = 1;
	while (count <= 8) {
		var randomNumber = rollone()
		if (randomNumber < min) {
			min = randomNumber
		}
		if (randomNumber > max) {
			max = randomNumber
		}
		count++;
	}
	console.log("The minimum value from these 8 rolls was " + min);
	console.log("The maximum value from these 8 rolls was " + max);
}

playStatistics()

function playStatistics2() {
	var min = 1000; //Don't like doing this, only if I am confident of the output of the function. 
	var max = -1;
	var count = 1;
	var total = 0;
	while (count <= 8) {
		var randomNumber = rollone()
		if (randomNumber < min) {
			min = randomNumber
		}
		if (randomNumber > max) {
			max = randomNumber
		}
		count++;
		total += randomNumber;
	}
	console.log("The minimum value from these 8 rolls was " + min);
	console.log("The maximum value from these 8 rolls was " + max);
	console.log("The total value from these 8 rolls was " + total);
}

playStatistics2();

function playStatistics3(num) {
	var min = 1000; //Don't like doing this, only if I am confident of the output of the function. 
	var max = -1;
	var count = 1;
	var total = 0;
	while (count <= num) {
		var randomNumber = rollone()
		if (randomNumber < min) {
			min = randomNumber
		}
		if (randomNumber > max) {
			max = randomNumber
		}
		count++;
		total += randomNumber;
	}
	console.log("The minimum value from these " + num + " rolls was " + min);
	console.log("The maximum value from these " + num + " rolls was " + max);
	console.log("The total value from these " + num + " rolls was " + total);
}

playStatistics3(3);


function playStatistics4(num) {
	var min = 1000; //Don't like doing this, only if I am confident of the output of the function. 
	var max = -1;
	var count = 1;
	var total = 0;
	while (count <= num) {
		var randomNumber = rollone()
		if (randomNumber < min) {
			min = randomNumber
		}
		if (randomNumber > max) {
			max = randomNumber
		}
		count++;
		total += randomNumber;
	}
	console.log("The minimum value from these " + num + " rolls was " + min);
	console.log("The maximum value from these " + num + " rolls was " + max);
	console.log("The average from these " + num + " rolls was " + total/count);
}

playStatistics4(5);


console.log("New years roll to 20 game")
function rollOneToTwenty() {
	return Math.floor(Math.random() * 20) + 1 
}
function statsUntilDoubles() {
	var count = 1;
	var min = 21;
	var max = -1;
	var total = 0;
	var firstRoll = rollOneToTwenty()
	var differentRolls = true;
	while (differentRolls) {
		newRoll = rollOneToTwenty()
		count++;
		total += newRoll
		if (newRoll < min) {
			min = newRoll
		}
		if (newRoll > max) {
			max = newRoll
		}
		if (newRoll === firstRoll) {
			differentRolls = false;
		} else {
			firstRoll = newRoll
		}
	}
	console.log("Minimum value: " + min)
	console.log("Maximum value: " + max)
	console.log("Total value: " + total)
	console.log("Total rolls: " + count)
	console.log("Average value: " + total/count)
}

statsUntilDoubles();

/*Claire is where? create reset, moveby, xLocation, yLocation 
functions for claire.
Will do this with functional programming as instructed by book
Makes more sense to create this with OOP later. */

var xClaire = 0;
var yClaire = 0;

function reset() {
	var xClaire = 0;
	var yClaire = 0;
}

function moveBy(xDistance = 0, yDistance = 0) {
	xClaire += xDistance
	yClaire += yDistance
}

function xLocation() {
	return xClaire;
}

function yLocation() {
	return yClaire;
}

reset();
moveBy(1, -2);
moveBy(3, 1)
console.log(xLocation())
console.log(yLocation())

function distFromHome() {
	return Math.sqrt(xClaire*xClaire + yClaire*yClaire)
}

console.log(distFromHome())

function weekdayName(weekdayNum) {
	switch(weekdayNum) {
		case 1:
			console.log("Sunday")
			break;
		case 2: 
			console.log("Monday")
			break;
		case 3:
			console.log("Tuesday")
			break;
		case 4: 
			console.log("Wednesday")
			break;
		case 5:
			console.log("Thursday")
			break;
		case 6: 
			console.log("Friday")
			break;
		case 7:
			console.log("Saturday")
			break;
		default: 
			console.log("No day number given!")
	}
}

weekdayName(1)
weekdayName(3)
weekdayName(4)
weekdayName()

function weekdayName2(weekdayNum) {
	var num = weekdayNum % 7
	switch (num) {
		case 1:
			console.log("Sunday")
			break;
		case 2: 
			console.log("Monday")
			break;
		case 3:
			console.log("Tuesday")
			break;
		case 4: 
			console.log("Wednesday")
			break;
		case 5:
			console.log("Thursday")
			break;
		case 6: 
			console.log("Friday")
			break;
		case 7:
			console.log("Saturday")
			break;
		default: 
	}
}

weekdayName2(1)
weekdayName2(8)
weekdayName2(16)

function monthName(monthNum) {
	var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	return months[monthNum-1]
}

console.log(monthName(1))
console.log(monthName(12))

function monthToDays(monthNum) {
	switch (monthNum) {
		case 1:
			return 31
			break;
		case 2: 
			return 28
			break;
		case 3:
			return 31
			break;
		case 4: 
			return 30
			break;
		case 5:
			return 31
			break;
		case 6: 
			return 30
			break;
		case 7:
			return 31
			break;
		case 8:
			return 31
			break;
		case 9: 
			return 30
			break;
		case 10:
			return 31
			break;
		case 11: 
			return 30
			break;
		case 12:
			return 31
			break;
	}
}

function dayToMonth(dayNum) {
	switch (true) {
		case (dayNum >= 1 && dayNum <= 31):
			return "January"
			break;
		case (dayNum >= 32 && dayNum <= 59):
			return "February"
			break;
		case (dayNum >= 60 && dayNum <= 90):
			return "March"
			break;
		case (dayNum >= 91 && dayNum <= 120):
			return "April"
			break;
		case (dayNum >= 121 && dayNum <= 151):
			return "May"
			break;
		case (dayNum >= 152 && dayNum <= 181):
			return "June"
			break;
		case (dayNum >= 182 && dayNum <= 212):
			return "July"
			break;
		case (dayNum >= 213 && dayNum <= 243):
			return "August"
			break;
		case (dayNum >= 244 && dayNum <= 273):
			return "September"
			break;
		case (dayNum >= 274 && dayNum <= 304):
			return "October"
			break;
		case (dayNum >= 305 && dayNum <= 334):
			return "November"
			break;
		case (dayNum >= 335 && dayNum <= 365):
			return "December"
			break;

	}
}

console.log(dayToMonth(243))

function fullDate(dayNum) {
	var monthString = dayToMonth(dayNum)
	var dayOfWeekString = weekdayName2(dayNum)
	var yearString = "2017";
	return monthString, dayOfWeekString, yearString
}

console.log(fullDate(234))
