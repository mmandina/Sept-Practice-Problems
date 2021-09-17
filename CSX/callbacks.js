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
