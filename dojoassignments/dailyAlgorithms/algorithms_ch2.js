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












