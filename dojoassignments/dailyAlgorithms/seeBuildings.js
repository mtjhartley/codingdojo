//given an array of building heights [3,2,5,6,1]
//imagine you are standing in a 2d plane looking at these buildings
//how many distinct buildings can you see?

function seeBuildings(arr) {
	var maxHeight = arr[0]
	for (var x = 0; x < arr.length; x++) {
		if (arr[x] > maxHeight || x == 0) { //or conditional assumes you can always see the first building
 			maxHeight = arr[x]
			arr[x] = true;
		}
		else {
			arr[x] = false;
		}
	} return arr;
}


console.log(seeBuildings([3,2,1,4,5]))
	
