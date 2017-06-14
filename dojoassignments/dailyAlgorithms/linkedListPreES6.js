function sList() {
	this.head = null;
	this.length = 0

	this.add = function(value) {
		var current = this.head
		if (!this.head) {
			this.head = new Node(value)
			this.length++;
		}
		else {
			while (current.next) {
				current = current.next
			}
			current.next = new Node(value)
			this.length++;
		}
	}
	this.remove = function(value) {
		var current = this.head
		var previous = this.head
		console.log("this.head.value")
		console.log(this.head.value)
		//first value
		if (this.head.value === value) {
			this.head = current.next
			current.next = null;
			this.length--;
		}
		else {
			//anything but first or last
			while (current.next) {
				if (current.value === value) {
					previous.next = current.next
					current.next = null;
					this.length--;
				}
				else {
					previous = current
					current = current.next
				}
				//check last
				if (current.value === value) {
					previous.next = current.next
					current.next = null;
					this.length--;
				}
			}
		}
	}
	this.display = function() {
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
	this.addFront = function(value) {
		if (this.head == null) {
			this.head = new Node(value)
		}
		else {
			newNode = new Node(value)
			newNode.next = this.head
			this.head = newNode
		}
	}


}

function Node(x) {
	this.value = x
	this.next = null;
}

var new1 = new Node(1)

console.log(new1.value)
console.log(new1.next)

console.log("linked list stuff")
var linkedList = new sList()
console.log(linkedList.head)
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
console.log(linkedList.display())


linkedList.remove(3) 
console.log(linkedList.display())

linkedList.remove(4) 
console.log(linkedList.display())

linkedList.add(5) 
console.log(linkedList.display())

linkedList.remove(1) 
console.log(linkedList.display())

linkedList.addFront(10) 
console.log(linkedList.display())


