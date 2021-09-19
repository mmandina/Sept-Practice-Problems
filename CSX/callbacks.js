function pluralize(array) {
  let newArray = [];
  for (let string of array) {
    newArray.push(string + "s");
  }
  return newArray;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals));

function subtractTwo(num) {
  return num - 2;
}
function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  if (num % 2 === 0) return true;
}
function func2(num) {
  if (num % 2 === 1) return true;
}

// Uncomment these to check your work!
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback1(array[i]) || callback2(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
