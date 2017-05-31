function coinChange(n) {
	var dollars = n / 100;
	dollars = Math.floor(dollars);
	n = n % 100;

	var half_dollars = n/50;
	half_dollars = Math.floor(half_dollars)
	n = n % 50;

	var quarters = n/25;
	quarters = Math.floor(quarters)
	n = n % 25;

	var dimes = n/10;
	dimes = Math.floor(dimes)
	n = n % 10;

	var nickels = n/5;
	nickels = Math.floor(nickels)
	n = n % 5;

	var pennies = n

	console.log(dollars)
	console.log(half_dollars)
	console.log(quarters)
	console.log(dimes)
	console.log(dollars)


}

coinChange(101)


function generateCoinChange(cents) {
	var quarters = 0
	var dimes = 0
	var nickels = 0
	var pennies = 0
	console.log(cents + " cents can be represented by: ")

	quarters = Math.floor(cents/25)
	cents = cents - (quarters * 25)

	dimes = Math.floor(cents/10)
	cents = cents - (dimes * 10)

	nickels = Math.floor(cents/5)
	cents = cents - (nickels * 5)

	pennies = cents
	var totalCoins = quarters + dimes + nickels + pennies

	console.log("Quarters: " + quarters)
	console.log("Dimes: " + dimes)
	console.log("Nickels: " + nickels)
	console.log("Pennies: " + pennies)
	console.log("Total # of coins = " + totalCoins)
}

generateCoinChange(1)
generateCoinChange(24 )