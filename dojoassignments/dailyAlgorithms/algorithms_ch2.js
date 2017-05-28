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




