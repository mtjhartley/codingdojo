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


function removeNeg(arr) {
	for (var x=0; x <arr.length; x++) {
		if (arr[x] < 0) {
			removeAt(arr, x);
		}
	}
	console.log(arr);
}

var myArr = [1,2,-3,4]

console.log(myArr)

removeNeg(myArr)