/* Math.random() returns a randomly generated
decimal number between 0 and 1, theoretically able 
to return zero but can not return 1. 
*/
console.log(Math.random())

/* Math.floor() makes positive numbers less positive
and negative numbers more negative. For example...
Math.floor(-2.718) => -3
Math.floor(3.4345) => 3
*/

Math.floor(-2.718)
Math.floor(3.4345)

/* Math.ceil() acts conversely. Positive numbers are made
more positive, and negative numbers are made less negative.
Math.ceil(-2.2) => -2
Math.ceil(4.21) => 5
*/

Math.ceil(-2.2)
Math.ceil(4.21)

/* Math.trunc() drops any decimals, moving the number closer to 0
*/

Math.trunc(4.23)

//What if you want a number as low as 51 and as high as 100?

Math.random() * 50 // close, but this gets you positive integers w/ from 0-49.

Math.trunc(Math.random() * 50) //better, but we're still limited to the 0-40 range.

Math.trunc(Math.random() * 50) + 51 //Awesome! We've added the offset we needed. 

