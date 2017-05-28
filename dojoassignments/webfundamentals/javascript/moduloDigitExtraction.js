/*
Pseudo Code

Number: 32768
Goal: Extract the hundreds digit
Step 1: Use division to get the decimal point where you want it
Number = Number / 100
Number = 327.68

Step 2: Drop the decimals
Number = Math.floor(Number)
Number = 327

Step 3: Use modulo to get the ones digit
Dividing by 10 and taking the remainder
will get you just the ones digit
Number = Number % 10
*/



//Step 1 
var myNumber = 32768;
console.log(myNumber)

myNumber = myNumber/100
console.log(myNumber)

//Step 2
myNumber = Math.floor(myNumber)
console.log(myNumber)

//Step 3
myNumber = myNumber % 10
console.log(myNumber) //7
