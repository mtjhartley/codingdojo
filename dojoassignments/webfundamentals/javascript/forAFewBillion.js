
function howLongToReachGoalAmount(goalValue) {
	var count = 0
	var value = 0.01
	while (goalValue > value) {
		value *= 2;
		count += 1;
	}
	console.log("It took " + count + " days to make " + value + " dollars.")
}

howLongToReachGoalAmount(10000);
console.log()
howLongToReachGoalAmount(1000000000);
console.log()
howLongToReachGoalAmount(Infinity);
console.log()

//while loop implementation, makes more sense to me 
function howMuchMadeAfterXDays(days) {
	var value = 0.01;
	var count = 0;
	while (days !== count) {
		count += 1;
		value *=2;
	}
	console.log("In " + days + " days you made " + value + " dollars.")

}

howMuchMadeAfterXDays(30);
console.log()

//for loop implementation
function moneyMadeAfterXDays(days) {
	var value = 0.01
	for (var x = 1; x <= days; x++) {
		value *= 2;
	}
	console.log ("In " + days + " days you made " + value + " dollars.")
}

moneyMadeAfterXDays(30);
moneyMadeAfterXDays(1031);