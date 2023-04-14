/* The Document Object Model is an API for manipulation HTML and XML documents. It is a set of methods/rules that allows us to exchange information*/

console.log(document);

var myDocumentBody = document.body;
console.log("myDocumentBody with Child Notes >>", myDocumentBody.childNodes);

// GETTING SINGLE ELEMENTS
// getting element by id
var h1Tag = document.getElementById("h1");
console.log("h1Tag   :>> ", h1Tag);

// getting element by class with querySelector
var h1TagQuery = document.querySelector(".header");
console.log("h1TagQuery :>> ", h1TagQuery);

// getting element by ID with querySelector
var h1TagQueryId = document.querySelector("#h1");
console.log("h1TagQueryId :>> ", h1TagQueryId);

//getting element by tag with querySelector
var navTagQueryTag = document.querySelector("nav");
console.log("navTagQueryTag :>> ", navTagQueryTag);

// GETTING MULTIPLE ELEMENTS
// by Tag name --> getElementsBy...() returns a HTML collection which is a live list (live list = console will show DOM added elements)
var pTags = document.getElementsByTagName("p");
console.log("pTags :>> ", pTags);

//by Tag/Class/ID with querySelectorAll --> -querySelectorAll() returns a nodelist = static list (static list = will only show html elements)
// doesn't for with a for each loop
var pTagsClass = document.querySelectorAll(".p-tag");
console.log("pTagsClass :>> ", pTagsClass);

// CREATING NEW ELEMENTS
var newP = document.createElement("p");
newP.innerText = "Write new text into a new p tag";
var pSection = document.getElementById("p-section");
pSection.appendChild(newP);

console.log("now with a new ptags :>> ", pTags);
console.log(
  "now with a new ptagsClass that does not show live in console as NodeList:>> ",
  pTagsClass
);

console.log("+++ +++ATRIBUTE METHODS+++++");
// ATTRIBUTE METHODS
// select
var myImg = document.querySelector("img");
console.log("myImg :>> ", myImg);

//get source of file to console
var imgSrc = myImg.getAttribute("src");
console.log("imgSrc  :>> ", imgSrc);
var imgAlt = myImg.getAttribute("alt");
console.log("imgAlt  :>> ", imgAlt);

// button change picture
function changeImg() {
  // function in html
  var imgSrc = document.querySelector("img").getAttribute("src"); // locate image + alt
  if (imgSrc === "whale.jpg") {
    myImg.setAttribute("src", "jellyfish.jpg");
  } else {
    myImg.setAttribute("src", "whale.jpg"); //
    myImg.setAttribute("alt", "two whales from wikipedia, licenced CC");
    myImg.setAttribute("titel", "two whales from wikipedia");
  }

  console.log("button clicked :>> ");
}

function changeColor() {
  // function needs to be inside html
  var h1 = document.getElementById("h1");
  /*   h1.setAttribute("class", "blueH1"); // defined in css
  h1.setAttribute("style", "font-size: 100px"); */

  // or in both directions with classList and toggle: adds and removes with true and false
  h1.classList.toggle("header");
}

// ADD NEW ELEMENTS with appendChild(<element> )
// add input field for new line --> look at html onchange

function addNewLine() {
  console.log("typing something...");
  var input = document.getElementById("input-text");
  console.log("input :>> ", input.value);

  var newPTag = document.createElement("p"); // create new <p>
  newPTag.innerText = input.value; // input von oben ins <p>
  var pTagSpan = document.getElementById("new-line"); // Element aus dem html finden in das etwas eingefügt werden soll
  pTagSpan.appendChild(newPTag); // newPTag (input) in pTagSpan schicken

  console.log("newPTag :>> ", newPTag);
}

// innerHTML und innerText
console.log("++++Unterschied innerHTML und innerText");
var span = document.getElementById("span");

console.log("span.innerHTML :>> ", span.innerHTML); // gives back to console everything including html-Elements
console.log("span.innerText :>> ", span.innerText); // less easy to attack with JS-Logic

// classList Method
function round() {
  var myImg = document.querySelector("img");
  myImg.classList.add("round");
}
function rectangle() {
  var myImg = document.querySelector("img");
  myImg.classList.remove("round");
}

// Alternativ: toggle adds and removes on the same item
/* function round() {
  var myImg = document.querySelector("img");
  myImg.classList.toggle("round");
}
 */

// Get value of user/several inputs
function selectedMood() {
  // var radios = document.querySelectorAll("input"); // would return all inputs (also text)
  var radios = document.querySelectorAll("input[type=radio]");
  console.log("radios :>> ", radios);
  // console.log("radios :>> ", radios[0].checked); // by this send to console if first is checked

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      console.log("your mood is: " + radios[i].value);
    } else {
      console.log("and you are not: " + radios[i].value);
    }
  }
}
