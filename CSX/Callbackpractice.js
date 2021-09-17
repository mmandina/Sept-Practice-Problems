//This array will be played with by callbacks
const array = [1, 2, 3, 4];

//Calls applyToArray, sending it the above array and a function as arguments.
//This function in the arguments is initialized directly below.
const arrayFunctionPreInitialized = applyToArray(array, divideBy2);

function divideBy2(item) {
  return item / 2;
}

//sends an array and a function to the function applyToArray
//It also initializes the function IN the function arguments
//You don't need to name it, but I did
//I left the function call all in one line to make the syntax more obvious
const arrayFunctionInitializedInLine = applyToArray(array, function multBy2(item) { return item * 2; });

array.forEach(element => {
  
});

//This function accepts an array and a function (called callback within the function applyToArray).
//It establishes a outArray, iterates through the parameter array, applying the parameter function to each item
//It then pushes the item to the outArray, and returns it.
function applyToArray(array, callback) {
  const outArray = [];
  for (const num of array) {
    outArray.push(callback(num));
  }
  return outArray;
}
console.log("The initial array is", array);
console.log(
  "The array created by the inline function initialization is",
  arrayFunctionInitializedInLine
);
console.log(
  "The array created by the function being created outside of the function call is",
  arrayFunctionPreInitialized
);

//You can alter the returns item***** within either of the above functions
//(divideBy2 or multBy2 in line 13) to
//change the effect on the arrays.