function validBraces(string){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
        '>' : '<'
    };
    var stack = [];
    for (var i = 0; i < string.length; ++i)
        if (string[i] === '(' || string[i] === '[' || string[i] === '{')
            stack.push(string[i]);
        else if (stack[stack.length-1] === pairs[string[i]])
            stack.pop();
        else
            continue
    console.log(stack)
    return stack.length === 0;

}

console.log(validBraces('><'))
console.log(validBraces('<{haha}>'))
console.log(validBraces('<{(})>'))
