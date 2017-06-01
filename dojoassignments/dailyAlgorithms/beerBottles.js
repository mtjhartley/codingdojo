// function drinkBeer(bottleCaps, emptyBottles, totalBeers, currentBeers) {
// 	bottleCaps++;
// 	emptyBottles++;
// 	totalBeers++;
// 	currentBeers--;
// 	console.log("Total beers drank: " + totalBeers)
// 	return (bottleCaps, emptyBottles, totalBeers, currentBeers)
// }

function beerBottles(beers) {
	console.log("Start drinking!")
	var totalBeers = 0;
	var emptyBottles = 0;
	var bottleCaps = 0;

	while (beers > 0) {

		//code for drinking a beer, you use one from your current but add one cap, bottle, and to the total.
		beers--;
		bottleCaps++;
		emptyBottles++;
		totalBeers++;
		

		//bottleCaps, emptyBottles, totalBeers, beers = drinkBeer(bottleCaps, emptyBottles, totalBeers, beers)
		console.log()
		console.log("You have drank " + totalBeers + " beers total")
		console.log("You have  " + emptyBottles + " empty bottles right now")
		console.log("You have  " + bottleCaps + " bottle caps right now")
		console.log("You have " + beers + " beers remaining to drink right now (before trade-in)")
		console.log()
		if (bottleCaps % 4 === 0 && bottleCaps > 0) {
			console.log("You have 4 bottle caps! Trading in all caps for a new beer")
			bottleCaps = 0;
			beers++;
			
		}
		if (emptyBottles % 2 === 0  && emptyBottles > 0) {
			console.log("You have 2 empty bottles. Trading in all empty botles for a new beer.")
			emptyBottles = 0
			beers++;
		}
		if (beers !== 0) {
			console.log ("Starting the next round with " + beers + " beers!")
		} else {
			console.log("You can't trade in anymore caps or bottles. Game over!")
		}


	}

	console.log("You drank " + totalBeers + " beers!")
}


beerBottles(5)







