// ADD CODE HERE
function createFunction() {
  function other() {
    return "hello world";
  }
  return other;
}

const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
// ADD CODE HERE
function createFunctionWithInput(input) {
  function newFunction() {
    return input;
  }

  return newFunction;
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput("sample");
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput("hello");
console.log(helloFunc()); // should log: 'hello'
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
// ADD CODE HERE
function addByX(num) {
  return (a) => a + num;
}
const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output

// Now call addByTwo with an input of 2 and log the output

function once(callback) {
  let ran = false;
  let nums;
  function ifRan(arg) {
    if (!ran) {
      nums = callback(arg);
      ran = true;
      return nums;
    }
    return nums;
  }

  return ifRan;
}
const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
// console.log(addByTwoOnce(9001));  //should log 7
function after(timesCalled, callback) {
  let counter = 0;
  function runMe(args) {
    counter++;
    console.log(counter);
    if (counter >= timesCalled) {
      return callback(args);
    }
    return undefined;
  }
  return runMe;
} // ADD CODE HERE

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
// ADD CODE HERE
function delay(cb, wait) {
  function newFunc() {
    setTimeout(cb, wait);
  }
  return newFunc;
}
// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
// ADD CODE HERE
function saveOutput(cb, string) {
  let obj = {};
  let pass = string;
  function password(str) {
    if (pass === str) {
      return obj;
    }
    obj[str] = cb(str);
    return cb(str);
  }
  return password;
}
// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }
