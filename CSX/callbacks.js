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
