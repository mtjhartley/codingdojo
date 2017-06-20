function Stack() {
    this.stack = []

    this.push = function(val) {
        this.stack.push(val)
    }
    this.pop = function() {
        
        remove_val = this.stack.pop()
        return remove_val
    }
}

stack1 = new Stack()

stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1.pop())

console.log(stack1.stack)


