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
