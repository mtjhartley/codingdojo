class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        const newNode = new Node(value);
        let current = this.head
        if (!current) {
            this.head = newNode
            this.length++
            return newNode;
        }
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
            this.length++;
            return newNode
    }
    remove(value) {
        let current = this.head
        let previous = this.head

        while(current.next) {
            if (current.value === value) {
                previous.next = current.next
                current.next = null
                this.length--;
                return current.value
            } else {
            previous = current
            current = current.next;
            }
        }
    }
    len() {
        let current = this.head
        let count = 0
        while (current.next != null) {
            count++;
            current = current.next
        }
        count++;
        return count
    }
    avg() {
        var current = this.head
        var total = 0
        while (current.next != null) {
            console.log(current.value)
            total += current.value;
            current = current.next;
        }
        total += current.value
        console.log(total)
        return total/this.length
    }
    total() {
        var current = this.head
        var total = 0
        while (current.next != null) {
            console.log(current.value)
            total += current.value;
            current = current.next;
        }
        total += current.value
        console.log(total)
        return total
    }
    display() {
        var emptyStr = '[';
        var current = this.head
        while (current.next != null) {
            emptyStr += current.value;
            emptyStr += ", ";
            current = current.next;
        }
        emptyStr += current.value;
        emptyStr += "]"
        return emptyStr
    }
}



linkedList1 = new linkedList()

console.log(linkedList1)

linkedList1.add(1)

console.log(linkedList1)

linkedList1.add(20)
linkedList1.add(35)

console.log()
console.log(linkedList1.head.next)

console.log(linkedList1.len())

console.log(linkedList1.length)
console.log(linkedList1.avg())
console.log(linkedList1.display())
console.log(linkedList1.remove(20))
console.log(linkedList1.display())
console.log(linkedList1.length)