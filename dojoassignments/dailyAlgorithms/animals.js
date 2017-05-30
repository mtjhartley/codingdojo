//This variable initializes the object with key value pairs
var animals = {
    animal: "cat",
    greeting: "face scratch!"
}

//We create an empty list of keys and values
//For each item(which gets you the key) (ex: animal)
//in the object (animals)
//push the item (animal) into array keys
//and push the value (obj[item]) ("cat") into the values array.
//Do this "for each iten in obj""

function printKeysAndValueArray(obj) {
    var keys = [];
    var values = [];
    for (item in obj) {
        keys.push(item)
        values.push(obj[item])
    }

    console.log("Keys array : " + keys)  
    console.log("Values array : " + values)
}

printKeysAndValueArray(animals)



/* 
Initialize a new empty object with the name newObject
go through the each array simultaneously (arr1.length assumes each array is equal length, and we 
will get matching indexes)
the key should be arr1[x]
the value should be arr2[x]

the syntax for entering somehing into the object is 
newObject[key] = value
Finally, return it!
*/
function zipArrays(arr1, arr2) {
    var newObject = {};
    for (var x = 0; x < arr1.length; x++) {
        var key = arr1[x];
        var value = arr2[x];
        newObject[key] = value
    }
    return (newObject)
}

array1 = ["Name", "Age", "Favorite Food"]
array2 = ["Johnny", 56, "Burgers"]

FinalObj = zipArrays(array1, array2)

console.log(FinalObj)

