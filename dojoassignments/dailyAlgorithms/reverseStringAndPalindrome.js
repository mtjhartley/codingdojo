function reverseString(input) {
    var reverse = "";
    for (var x = input.length-1; x >= 0; x--) {
        reverse += input[x]
    }
    return reverse
}

console.log(reverseString("banana"))

function isPalindrome(input) {
    var reverse = "";
    for (var x = input.length - 1; x>= 0; x--) {
        reverse += input[x];
    }
    if (reverse === input) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('banana'))