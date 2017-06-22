function Stack() {
    this.array = []
    this.pop = function() {
        return this.array.pop()
    }
    this.push = function(value) {
        this.array.push(value)
        return this
    }
    this.isEmpty = function() {
        return this.array.length === 0

    
    }

}

stackA = new Stack()
console.log(stackA.isEmpty())
stackA.push(1)
stackA.push(2)
stackA.push(3)

console.log(stackA.array)
console.log(stackA.isEmpty())

function dupStack(stack1) {
    stack2 = new Stack();
    tempStack = new Stack();

    while (!stack1.isEmpty()) {
        current = stack1.pop()
        tempStack.push(current)
    }
    while (!tempStack.isEmpty()) {
        current = tempStack.pop();
        stack1.push(current);
        stack2.push(current);
    }
    return stack2
}

stackB = dupStack(stackA)
console.log(stackB.array)
