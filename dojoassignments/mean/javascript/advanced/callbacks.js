function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makeAlfredo.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
// call the each function
each([1,2,3], function(num) { console.log(num + " I am from the callback!"); }) //so many alerts!