function parenCheck(string) {
    openParenCount = 0;
    for (var x = 0; x < string.length; x++) {
        if (string[x] == "(") {
            openParenCount += 1
        }
        else if (string[x] == ")") {
            openParenCount -= 1
        }
        if (openParenCount < 0) {
            return false
        }
    }
    if (openParenCount === 0) {
        return true
    }
    else {
        return false
    }
}


console.log(parenCheck("()()()")) //true
console.log(parenCheck("((()))")) //true
console.log(parenCheck(")("))     //false
console.log(parenCheck("(()"))    //false