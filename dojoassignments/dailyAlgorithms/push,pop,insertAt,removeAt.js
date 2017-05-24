//CodingDojo practice for implementation of array functions. Only allowed to use arr.length
//5/24

function pushVal(arr,value) {
	arr[arr.length] = value
	console.log(arr);
}

function popVal(arr) {
	arr.length = arr.length - 1
	console.log(arr);
}

function insertAt(arr,index,value) {
	for (var i = arr.length - 1; i >= index; i--) {
		arr[i+1] = arr[i];
	}
	arr[index] = value;
	console.log(arr);
}

function removeAt(arr, index) {
	for (var x = index; x < arr.length - 1; x++) {
		arr[x] = arr[x+1]
	}
	arr.length = arr.length - 1;
	console.log(arr);
}

var myArr = [1,2,3]

pushVal(myArr,4) // [1, 2, 3, 4]
popVal(myArr) // [1, 2, 3]
insertAt(myArr, 3, 3.5) // [1, 2, 3, 3.5]
insertAt(myArr, 1, 1.5) // [1, 1.5, 2, 3, 3.5]
removeAt(myArr, 2) // [1, 1.5, 3, 3.5]