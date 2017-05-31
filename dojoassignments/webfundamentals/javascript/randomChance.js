function randomChanceGame(quarters) {
	var jackpot = Math.floor(Math.random() * 51) + 50
	for (quarters; quarters >= 0; quarters--) {
		var userNumber = Math.floor(Math.random() * 100)
		if (userNumber === 3) { //if your number matches the jackpot number of 3, you win!
			console.log("You won the game! Your prize is " + (quarters + jackpot))
			return (quarters + jackpot);
		}
		else if (userNumber !== 3 && quarters > 0) { //if your number does not match, and you have quarters remaining rerun the loop
			console.log("Rerunning the game. You have " + quarters + " quarters remaining.");
		}
		else { //your number did not match and you don't have enough quarters left! 
			console.log("You have lost the game. You have 0 quarters remaining.");
			return 0;
		}
		//console.log(quarters)
	} 
}

//randomChanceGame(100)

console.log(randomChanceGame(10))




function randomChanceGame(quarters, goal) {
	for (quarters; quarters >= 0; quarters--) {
		var jackpot = Math.floor(Math.random() * 51) + 50
		var userNumber = Math.floor(Math.random() * 100)
		if (quarters > goal) {
			console.log("You have passed/equaled your goal of " + goal + " quarters with " + (quarters + 1)+ " quarters!")
			return quarters + 1 //makes up for subtracting 1 through the loop
		}
		else {
			if (userNumber === 3) {
				console.log("You won the game! Your prize is " + (quarters + jackpot) + " Checking to see if you hit your goal...")
				quarters = quarters + jackpot
			}
			else if (userNumber !== 3 && quarters > 0) {
				console.log("Rerunning the game. You have " + quarters + " quarters remaining.");
			}
			else {
				console.log("You have lost the game. You have 0 quarters remaining.");
				return 0;
			}
			//console.log(quarters)
		}
	} 
}

//randomChanceGame(100, 120)