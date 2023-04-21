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
let data;

fetch(
  "https://www.berlin.de/sen/finanzen/vermoegen/beteiligungen/beteiligungsdatenbank/index.php/index/all.json?q="
)
  .then(function (response) {
    console.log("resonse :>> ", response);
    //breaks with this: console.log("response in json : ", response.json());
    return response.json();
  })
  .then(function (result) {
    console.log("result.index :>> ", result.index);
    // playingWithForEach(result.index);
    // playingWithFilter(result.index);
    playingWithMap(result.index);
  }) // if a problem, display error
  .catch(function (error) {
    console.log("error :>> ", error);
  });

// .forEach Loop
/* function playingWithForEach(data) {
  data.forEach((firstParameter, index, originalArray) => {
    //   console.log("firstParameter: ", firstParameter);
    // console.log("index: ", index);
    // console.log("original Array: ", originalArray);
    // elements can not be returned (like in normal functions)

    // elements can be attached with innerText
    const p = document.createElement("p");
    p.innerText = firstParameter.unternehmen;
    // console.log("firstParameter.unternehmen :>> ", firstParameter.unternehmen);
    document.querySelector("section").appendChild(p);
    //     // but with return new Elements can be added to the array
    // // in this case structure of array to cascaded for me to integrate properly + breaks the loop at this point
    // return (data.newDataPiece = "Agentur für Magie");
  });
} */

// array.filter ()
/* let mentors = ["raul", "emily", "lukas", "Heron"];
// structure like .forEach first element in function (mentor) = every element on the array, second = index, third = complete original array
// but logic put into return filters elements and gives back a new array
const favoriteMentor = mentors.filter((mentor, index, originalArray) => {
  console.log(mentor);
  return mentor.length > 4;
});
console.log(favoriteMentor);

function playingWithFilter(data) {
  // in variable only the data that matches the return
  const filteredBerlinData = data.filter(
    (firstParameter, index, originalArray) => {
      // console.log("filtered Berlin Data:", firstParameter);
      // console.log("index:", index);
      return firstParameter.unternehmen.includes("GmbH");
    }
  );
  console.log("filteredBerlinData :>> ", filteredBerlinData);
} */

// .map
//this gives a new array with "something" as many times are the array has objects
/* function playingWithMap(data) {
  const newData = data.map((firstParameter) => {
    // console.log("firstParameter of playingWithMap :>> ", firstParameter);
    return "something";
  });
  console.log("newData :>> ", newData);
} */

function playingWithMap(data) {
  const newData = data.map((firstParameter) => {
    // console.log("firstParameter of playingWithMap :>> ", firstParameter);
    const noData = firstParameter.
    return noData;
  });
  console.log("newData :>> ", newData);
}
