function circularQueue(max) {
    this.array = []
    this.array.length = max
    this.back = 0
    this.front = 0

    this.add = function(value) {
        if (this.array[this.front] === null) {
            this.array[this.front] = value

        }
        else {
            if (this.back + 1 % max === this.front) {
                console.log("party full")
            }
            else if (this.back === this.back+1 % max){
                this.array[this.back] = value;
            }

        }
    }
    this.remove= function() {
        if (this.back == this.front) {
            temp = this.array[this.back];
            this.array[this.back] = null;
            return temp;
        }
        else {
            temp=this.array[this.front]
            this.front = this.front + 1 % max;
            return temp;
        }
    }
}