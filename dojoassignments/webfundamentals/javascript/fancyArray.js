var arr = ["James", "Jill", "Jane", "Jack"]

console.log(arr.length)

function fancyPrintArray(array) {
	for (var index = 0; index < array.length; index++) {
		console.log(index + " -> " + array[index])
	}
}

fancyPrintArray(arr)

function fancierPrintArray(array, symbol) {
	for (var index = 0; index < array.length; index++) {
		console.log(index + " " + symbol + " " + array[index])
	}
}

fancierPrintArray(arr, "===>")

function fanciestPrintArray(array, symbol, reversed = false) {
	if (reversed) {
		for (var index = array.length - 1; index >= 0; index--) {
			console.log(index + " " + symbol + " " + array[index])
		}
	} else {
		for (var index = 0; index < array.length; index++) {
			console.log(index + " " + symbol + " " + array[index])
		}
	}
}

fanciestPrintArray(arr, "~~>", true)
fanciestPrintArray(arr, "---->")