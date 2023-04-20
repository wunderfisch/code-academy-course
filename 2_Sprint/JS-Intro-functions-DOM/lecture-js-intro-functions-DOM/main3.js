// Callback function example
/* function one() {
    console.log("Callbackfunction");
  }
  function two(callback) {
    console.log("function two");
    callback();
  }
  two(one); */

// normal Calculator
/* function calcRechner(num1, num2, calcType) {
  if (calcType === "sum") {
    return num1 + num2;
  } else if (calcType === "mult") {
    return num1 * num2;
  }
}
console.log("calc sum", calcRechner(3, 5, "mult")); */

//Callbackexample Calculator
// functions for calculation
function sum(num1, num2) {
  return num1 + num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function show(num1, num2) {
  console.log(`your numbers are ${num1} and ${num2}`);
}
// function makes a new function call that fits the functions above
function calcWithCallbacks(num1, num2, calcType) {
  if (typeof calcType === "function") {
    return calcType(num1, num2);
  } else {
    // else is only called when a string is in the call, not with any other. What does "function" in line 40 do exactly
    alert("you need to follow the naming rules");
  }
}
// calling the primary function
console.log(
  "calcWithCallback calling one of four functions:>> ",
  calcWithCallbacks(20, 56, show)
);
calcWithCallbacks(20, 56, show);

// play with EventListeners
// headline needs to be in the global scope when used in many functions
// getElementsByTagName("h1") does not work only getElementById("h1")
// getElementsByTagName returns a array, has to loop over the array elements even if only one
let headline = document.getElementById("h1");
function changeHeadline() {
  // for (let i = 0; i < h1.length; i++) {}
  headline.addEventListener("click", changeColor);
  console.log(headline);
  return headline;
}

function changeColor() {
  headline.classList.toggle("red");
}
changeHeadline();

console.log(headline);

// fetch

fetch(
  "https://www.berlin.de/sen/finanzen/vermoegen/beteiligungen/beteiligungsdatenbank/index.php/index/all.json?q="
)
  .then(function (response) {
    console.log("resonse :>> ", response);
    //breaks with this: console.log("response in json : ", response.json());
    return response.json();
  })
  .then(function (result) {
    console.log("result :>> ", result);
  }) // if a problem, display error
  .catch(function (error) {
    console.log("error :>> ", error);
  });
