function Queue() {
    this.queue = []

    this.deque = function() {
        return this.queue.pop()
    }

    this.enque = function(val) {
        if (this.queue.length === 0) {
            this.queue.push(val)
        }
        else {
            for (var x = this.queue.length; x > 0; x--) {
                this.queue[x] = this.queue[x-1];
            }
            this.queue[x] = val;
        }
    }
}

queue1 = new Queue()

queue1.enque(3)
queue1.enque(2)
queue1.enque(1)

console.log(queue1.queue)

console.log(queue1.deque())
console.log(queue1.queue)
