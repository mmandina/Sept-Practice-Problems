console.log("Hello, world!");
function repeater(char) {
  if (char.length === 5) {
    console.log(char);
    return char;
  } else {
    char += char[0];
    console.log(char);
    return repeater(char);
  }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater("g"));
console.log(repeater("j"));

function factorial(num) {
  console.log(num);
  if (num === 0) {
    return 1;
  }

  return num * factorial(--num);
}

// To check if you've completed the challenge, uncomment these console.logs!
//console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1
function getLength(array, counter = 0) {
  console.log(counter);
  if (array[0] == undefined) {
    return counter;
  }
  array.shift();

  return getLength(array, ++counter);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0
function flow(input, funcArray) {
  if (funcArray[0] == undefined) {
    return input;
  }
  return flow(funcArray[0](input), funcArray.slice(1));
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
