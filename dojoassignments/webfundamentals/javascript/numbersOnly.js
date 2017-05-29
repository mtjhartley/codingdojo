function numbersOnly(array) {
	var newArray = []
	for (var x = 0; x < array.length; x++) {
		if (typeof array[x] === "number") {
			newArray.push(array[x]);
		}
	} return newArray;
}

var arr = [1,2,3,"4", undefined, undefined, "301301hi", 0]

console.log(numbersOnly(arr))

function removeAt(array, index) {
	for (var x = index; x < array.length - 1; x++) {
		array[x] = array[x+1]
	}
	array.length = array.length - 1;
}

function numbersOnlySameArray(array) {
	for (var x = array.length - 1; x >= 0; x--) {
		if (typeof array[x] !== "number") {
			removeAt(array, x);
		}
	} return array;
}

console.log(numbersOnlySameArray(arr))

