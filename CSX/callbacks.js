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
function eitherCallback(callback1, callback2) {
  let bool = (num) => callback1(num) || callback2(num);
  return bool;
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
// ADD CODE HERE
function reduce(array, callback, totals) {
  for (let index = 0; index < array.length; index++) {
    totals = callback(array[index], totals);
  }
  return totals;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
// ADD CODE HERE
function intersection(arrays) {
  let newArr = [];
  newArr = arrays.reduce((c, n) => n.filter((item) => c.includes(item)));

  return newArr;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
// ADD CODE HERE
function union(arrays) {
  let fullArray = [];
  fullArray = arrays.flat();
  console.log(fullArray);
  let newArray = Array.from(new Set(fullArray));

  return newArray;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  let matches = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] == callback(arr1[i])) {
      matches[arr1[i]] = arr2[i];
    }
  }

  return matches;
}

// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
function arrToObj(array, callback) {
  let obj = {};
  array.forEach((ele) => (obj[ele] = callback(ele)));
  return obj;
}

// Uncomment these to check your work!
const arrOfStrings = ["beer", "glue"];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
