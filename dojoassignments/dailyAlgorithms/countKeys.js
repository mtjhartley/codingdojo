
function removeAt(arr, index) {
	for (var x = index; x < arr.length - 1; x++) {
		arr[x] = arr[x+1]
	}
	arr.length = arr.length - 1;
	console.log(arr);
}

//count keys! 
function countKeys(array) {
    var newObject = {};
    for (var x = 0; x < array.length; x++) {
        if (newObject[array[x]]) {
            newObject[array[x]] += 1
        } else {
            newObject[array[x]] = 1
        }
    } return newObject
}



var array = [3,4,4,3,2,1]

console.log(countKeys(array))

console.log('////')
var object = (countKeys(array))

//filter the array based on the object!
function filterArray(arr, obj) {
    for (var x = arr.length; x >= 0; x--) {
        console.log(obj[arr[x]])
        if (obj[arr[x]] > 1) {
            console.log(obj[arr[x]])
            obj[arr[x]] -= 1
            removeAt(arr, x)   
        }
    }
    return arr;
}

console.log(filterArray(array, object))
