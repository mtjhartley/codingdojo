var arr = [1,2,3,4,4,4,5,6]

function removeAt(arr, index) {
	for (var x = index; x < arr.length - 1; x++) {
		arr[x] = arr[x+1]
	}
	arr.length = arr.length - 1;
    return arr;
}

function insertAt(arr, index, value) {
    for (var x = arr.length -1; x >= index; x--) {
        arr[x+1] = arr[x]
    } arr[index] = value
    return arr;
}

var insertArray = [0,1,2,3,5]
console.log(insertAt(insertArray,4, 4))


function removeDuplicates(array) {
    var lastNum = array[0]
    for (var x = 1; x < array.length; x++) {
        if (array[x] == lastNum) {
            removeAt(array, x)
            x -= 1 //checks for more than 1 duplicate! 
        }
        lastNum = array[x]
        console.log("The current value of x is "+ x)
        console.log(array)
    } return array
}

removeDuplicates(arr)

function pushFront(array, value) {
    for (var x = array.length - 1; x >= 0; x--) {
        array[x+1] = array[x]
    } array[0] = value
    return array
}

//console.log(pushFront(arr, 0))

function popFront(array) {
    for (var x = 0; x < array.length; x++) {
        array[x] = array[x+1]
    } array.length = array.length -1
    return array
}

//console.log(popFront(arr))



function swapPairs (array) {
    if (array.length % 2 === 0) {
        var endPoint = array.length
    } else {
        var endPoint = array.length -2
    }
    for (var x = 0; x < endPoint; x +=2) {
        var temp = array[x];
        array[x] = array[x+1];
        array[x+1] = temp;
    } return array
}
//console.log(swapPairs([1,2,3,4]))
//console.log(swapPairs([1,2,3,4,5]))

function minToFront(array) {
    var min = array[0]
    for (var x = 0; x < array.length; x++) {
        if (array[x] < min) {
            min = array[x]
            minIndex = x
        }
    }
    var removedArray = removeAt(array, minIndex)
    var finalArray = insertAt(removedArray, 0, min)
    console.log(finalArray)
}

(minToFront([4,3,1,2,5]))

function reverseArray(arr) {
    for (var x = 0; x < arr.length/2; x++) {
        var temp = arr[x]
        arr[x] = arr[arr.length - (x+1)]
        arr[arr.length - (x+1)] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray([1,2,3,4]))

function rotateArray(arr, shiftBy) {
    while (shiftBy) {
        var temp = arr[0]
        for (var x = 0; x < arr.length; x++) {
            arr[x] = arr[x+1] 
        } 
        arr[arr.length - 1] = temp;
        shiftBy--;
    } return arr;
}

console.log(rotateArray([1,2,3,4,5], 2))

function filterRange(arr, min, max) {
    for (var x = 0; x <= arr.length; x++) {
        if (arr[x] < min || arr[x] > max) {
            for (var y = x; y < arr.length; y++) {
                arr[y] = arr[y+1]
                
            }
            arr.length = arr.length - 1
        }
    }
    return arr;
}

console.log(filterRange([1,3,5,6,8,10], 4, 9))

function arrayConcat(arr1, arr2) {
    var newArr = [];
    for (var x = 0; x < arr1.length; x++) {
        newArr.push(arr1[x])
    }
    for (var x = 0; x < arr2.length; x++) {
        newArr.push(arr2[x])
    }
    return newArr
}

console.log(arrayConcat([1,2], [3,4]))

function removeNegatives(array) {
    var index = 0;
    while(index < array.length) {
        if (array[index] < 0) {
            array[index] = array[array.length - 1];
            array.pop();
        } else {
            index++;
        }
    } return array;
}

function betterRemoveNegatives(array) {
    for (var x = 0; x < arr.length; x++) {
        if (array[x] < 0) {
            removeAt(array, x)
        }
    } return array
}

var negativeArray = [-1,2,3,-4,5]

console.log(betterRemoveNegatives(negativeArray));