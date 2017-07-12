var myNum: number = 5;
var myString: string = 'Hello Universe';
var myArr: Array<number> = [1,2,3,4];
let myObj: Object = {name: 'Bill'}
var anythingVariable: any = "Hey";
var anythingVariable: any = 7;
var arrayOne: boolean[] = [];
var arrayTwo: Array<any> = [1, 'abc', true, 2]
let myObj: Object = { x: 5, y: 10 }

class MyNode {
    val: number;
    _priv: number;
    constructor(valueP: number) {
        this.val = valueP;
    }
    doSomethingFun() {
        this._priv = 10;
    }
}
let myNodeInstance = new MyNode(1)
console.log(myNodeInstance.val);
function myFunction():void {
    console.log("Hello World")
    return;
}
function sendingErrors():never {
    throw new Error('Error Message')
}
