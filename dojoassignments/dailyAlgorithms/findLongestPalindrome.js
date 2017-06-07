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
function findLongestPalindrome(string) {
    var longestPalindrome = "";
    for (var i = 0; i < string.length; i++) {
        for (var y = i; y < string.length; y++) {
            var chunk = string.slice(i,y+1);
            console.log(chunk)
            if (isPalindrome(chunk) && (chunk.length > longestPalindrome.length)) {
                longestPalindrome = chunk.trim();
                console.log("Found new palindrome!")
                var start_index = i;
            }
        }
    }
    console.log("The length of the palindrome is " + longestPalindrome.length)
    console.log("The starting index of the palindrome is " + start_index)
    return longestPalindrome
}

console.log(findLongestPalindrome("I am a racecar, are you?"))
console.log(findLongestPalindrome("aba"))
console.log(findLongestPalindrome("I am a banana, but you are a aba. In the end, who is truly he tattarrattat"))


