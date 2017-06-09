/*
Given a input string of only numbers (i.e. "1231")
return a string that indicates the number of times a digit occured follow by the digit itself
ex: 
1231 -> 1 three, 1 two, 2 ones, or 131221.
The string should print the digits descending
*/


function seeAndSay(inputString) {
	var arr = [0,0,0,0,0,0,0,0,0,0];
	var newStr = '';
	for (var char in inputString) {
		arr[inputString[char]] += 1
	}
	for (var i = arr.length-1; i>= 0; i--) {
		if (arr[i] > 0) {
			newStr += arr[i]
			newStr += i
		}
	}
	return newStr
}

console.log(seeAndSay("1231")) // 131221
console.log(seeAndSay("1")) // 11
console.log(seeAndSay("11")) // 21
console.log(seeAndSay("21")) // 1211