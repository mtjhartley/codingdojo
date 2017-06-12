class Node {
    constructor(value) {
        this.val = value;
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
}

node1 = new Node(1)
node2 = new Node(20)

linkedList1 = new linkedList()

console.log(linkedList1)

linkedList1.add(node1)

console.log(linkedList1)

linkedList1.add(node2)

console.log()
console.log(linkedList1.head.next)