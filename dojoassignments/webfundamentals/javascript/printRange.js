function printRange(start = 0, stop, skip = 1) {
	for (var x = start; x < stop; x += skip) {
		console.log(x)
	}
}

printRange(1,10, 2)

console.log()
//for the version that just takes 1 parameter
function printRangeOneParam(stop, start = 0, skip = 1) {
	for (var x = start; x < stop; x += skip) {
		console.log(x)
	}
}

printRangeOneParam(7)