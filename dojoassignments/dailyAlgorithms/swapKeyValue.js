function reverseObj(object) {
    newObject = {};
    for (var key in object) {
        var value = object[key];
        newObject[value] = key;
    }
    return newObject;
}

obj = {
    "name": "google",
    "url": "www.google.com",
    "timesVisited": 245323532,
}

console.log(reverseObj(obj))