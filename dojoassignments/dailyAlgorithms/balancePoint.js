array1 = [1,2,3,4,5,15]


function BinarySearchBalancePoint(arr, halfIdx) {
	if Math.sum(arr[:halfIdx]) === Math.sum(arr[halfIdx:])) {
		return true
	}
	else {
		if (Math.sum(arr[:halfIdx]) < Math.sum(arr[halfIdx:])) {
			BinarySearchBalancePoint(arr, Math.floor(arr.length+halfIdx/2))
		}
	}

}


console.log(BinarySearchBalancePoint(array1, Math.floor((array1.length+halfIdx)/2)))