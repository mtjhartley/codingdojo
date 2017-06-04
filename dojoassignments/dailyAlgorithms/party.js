function isMyPartyFun(array) {
    var totalFood = 0;
    var totalHunger = 0;
    for (var object in array) {
        totalFood += array[object].food;
        totalHunger += array[object].hunger;
    }
    var avgFood = totalFood/array.length;
    var avgHunger = totalHunger/array.length;

    console.log(avgFood)
    console.log(avgHunger)

    if (avgFood >= avgHunger) {
        console.log("party rocks!")
    }
    else {
        console.log("this sucks")
    }
}

function isMyPartyFunAgain(array) {
    var totalFood = 0;
    var totalHunger = 0;
    for (var x = 0; x < array.length; x++) {
        totalFood += array[x].food;
        totalHunger += array[x].hunger;
    }
    var avgFood = totalFood/array.length;
    var avgHunger = totalHunger/array.length;

    console.log(avgFood)
    console.log(avgHunger)

    if (avgFood >= avgHunger) {
        console.log("party rocks!")
    }
    else {
        console.log("this sucks")
    }
}




person1 = {
    "food": 7,
    "hunger": 6,
}

person2 = {
    "food": 5,
    "hunger": 4,
}

peopleArray = [person1, person2]

isMyPartyFun(peopleArray)

//isMyPartyFunAgain(peopleArray)