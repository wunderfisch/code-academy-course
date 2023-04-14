var a = "starting javascript...";
console.log(a);

// Variable
var myVar = "Some Value inside the variable";
console.log("console prints var 'myVar':", myVar);

//variables as numbers without ""
var myNumber = 5
console.log('myNumber :>> ', myNumber);

// String
var myString = "some string as a variable"
console.log('myString :>> ', myString);

//Boolean can be true or false
var myBooleanTrue = true;
var myBooleanFalse = false;

// Null and undefined (you don't create a var with undefined yourself, it is rather not defined yet)
var myNullVar = null;
var myUndefinedVar; 
console.log('myUndefinedVar :>> ', myUndefinedVar);

//Arrays allow to store multiple values in a single reference. 
const myNumberArray = [1,2,3];
console.log('myNumberArray in line 27:>> ', myNumberArray);
const myStringArray = ["this", "is", "an", "array", "of", "strings"];
const myVarArray = [myBooleanTrue, myVar];
const myMixedArray = [2, true, "string", myVar]
console.log('myMixedArray :>> ', myMixedArray);

// Arrays: Length and index - Index is the position the element takes in the index
console.log('myMixedArray.length is this long:>> ', myMixedArray.length);
console.log('myMixedArray has "string" at this position:>> ', myMixedArray.indexOf("string"));
 // --> .indexOf is a method dh set of operations that can be performed on the array

// Array methods [many exist! used: nameOfVariable.methodeName()  https://www.w3schools.com/js/js_array_methods.asp ]
//add element to an array with push
console.log('myMixedArray used to look like this:>> ', myMixedArray); 
myMixedArray.push("a new element added")
console.log('myMixedArray now looks like this:>> ', myMixedArray);
myMixedArray.pop();
console.log('pop deletes  the last element of myMixedArray :>> ', myMixedArray);
myMixedArray.reverse();
console.log('reverse the order of MixedArray :>> ', myMixedArray);

//Find the value of an element inside the array
console.log('The value of the third element/index 2 of myStringArray is:>> ', myStringArray[2]);
// Type of an element in an array
console.log('What type is the third element/index 2 of myStringArray?:>> ', typeof myStringArray[2]);


// OBJECTS: with key-property/value pairs separated by commas, can have more objects nested inside (then the value of the object is an object itself)
const aTrain = {
 model: "ICE",
 length: 500, 
 company: "Deutsche Bahn",
 facilities: ["toilet", "restaurant", "kids area"],
 restaurant: {  //restaurant is a property of the object that is an object itself
    coffee: 3,
    dish: "pasta",
    employees: 5,
 }
}

//dot notation
console.log('aTrain.model :>> ', aTrain.model);
console.log('object inside an object like aTrain.restaurant.dish :>> ', aTrain.restaurant.dish);
console.log('show the object aTrain.restaurant inside aTrain object :>> ', aTrain.restaurant);

// Add or reasign properties with dot notation
aTrain.model = "RE";
aTrain.year = 2023;
console.log('aTrain :>> ', aTrain);


//LOGICAL STATEMENTS
// Logical operators: <, >, <=, >=, ==, !=, ===, !== always results in true/ false

console.log (2 < 5);

// IF STATEMENT
if (5 < 6){
    console.log("yes, it is smaller");
}

// IF ELSE
var myFavColor = "red";
if (myFavColor === "yellow") {
    console.log("yellow is my favorite color");
} else {
    console.log("that is not my favorite color");
}

// IF ELSE IF
if (myFavColor === "yellow") {
    console.log("yellow is my favorite color");
} else if (myFavColor === "green") {
    console.log("green is my favorite color");
} else if (myFavColor === "orange") {
    console.log("orange is my favorite color");
} else {
    console.log("oh wie gut dass niemand weiß, what my favorite color is");
}

// Variabel value kann sich ändern
var numberOne =1;
console.log(numberOne);
var numberOne =2;
console.log(numberOne);

// LOOPS
var phoenixes = ["Sonja", "Martha", "Mila", "Sabir", "Alireza", "Phouc", "Melissa"];
console.log(phoenixes[1]);

// For Loops
/*  for (counter; condition; iterator) {
    Code to run
} */

for  (var counter = 0; counter < 4; counter= counter + 1){
    console.log("I am looooping");
}

for (var i = 0; i < 7; i++) {
    console.log(phoenixes[i]);
}

//nicht wie folgt:
/* for (var i = 0; i < phoenixes.length; i++) {
    console.log(phoenixes);
}
for (var i = 0; i < phoenixes.length; i++) {
    console.log(phoenixes[0]);
} */

for (var i = 0; i < phoenixes.length; i++) {
    console.log(phoenixes[i]);
    if (phoenixes[i] === "Sabir") {
        console.log(phoenixes[i] + " is in position. End of loop.", + i);
        break
    } 
}

for (var i = 0; i < phoenixes.length; i++) {
    console.log(phoenixes[i]);
    if (phoenixes[i] === "Sabir") {
        console.log(phoenixes[i] + " is in position of the new loop.", + i);
    } else {
        console.log(phoenixes[i] + " is not Sabir in the new loop");
    }
}

// While Loop -- be carefull
var x = 2;
while (x < 4 ) {
    console.log("Carefull. could happen infinte loop with while!!!");
    x++;
}

console.log("++++++++++++++++++++++++FUNCTIONS++++++++++++++++++++++++++++++++++++++++++");
// FUNCTIONS
function functionName() {
console.log("*****some message*****");
}
functionName(); // functions always have to be "called" to work

function functionTwo () {
    console.log("*****other message*****");
}
functionTwo(); 

// function with parameters and function call with arguments
function functionThree(word) {
    console.log(word);
} 
functionThree("print function with parameter");
functionThree("print the same function with different parameter");
functionThree(["hey", "this", "is an array"]);

var variableForFunction = "A variable that is used in a function";
functionThree(variableForFunction);

var secondWord = "another Parameter for the function";
function funcionFour(word, secondWord) {
    console.log(word + "... & ..." + secondWord);
}
funcionFour(variableForFunction, secondWord);

// a function that has more parameters than arguments
var param1 = "A first parameter named param1";
var param2 = "A second parameter named param2";

function functionFive(param1, param2){
    console.log("irgendwas", param2);
    if (!param2) {
        param2 = "SOME PLACEHOLDER";
    }
    console.log(param2 + " *** " + param1);
}
functionFive(param1, param2);


// funcionFive(param1); // if statement is not called :-(
console.log("++++++++call function FIVE++++++++++++");
// functionFive schreibt immer zwei mal
functionFive ("whatever");
var greet = "hello";
var raul = "Raul";

functionFive (greet, raul);

// 
console.log("++++++return result+++++++");

function sum(a, b) {
    var result = a + b // a var inside {} only exists inside but not ourside the {}
    // console.log("result inside function", result);
    return result; //returns the result outside the function for line 223 + could also return something else than result
}
sum(37, 23); // is only console logged when line 219 is turned on
console.log(sum(500, 50));


function sum(c, d){
    var result = c + d;
    return result;
}

var myResult = sum(15, 24);
console.log("myResult", myResult);
var secondResult = sum(837339, 9383930);
console.log("secondResult", secondResult);


console.log("+++++++++++++++++++++++++++++++");

var pizza = 10; 
var ice = 5;

function menuPrice(mainPrice, dessertPrice) {
    var totalPrice = mainPrice + dessertPrice;
    console.log('totalPrice :>> ', totalPrice);
    return totalPrice;
}
var totalPrice = menuPrice(pizza, ice);

function myWallet(menuPrice) {
    console.log("Zwischenstand menuPrice", menuPrice);
    var wallet = 20;
    if (menuPrice > wallet) {
        console.log("may I do the dishes");
    } else {
        console.log("I take pizza and ice cream");
    }
}
myWallet(totalPrice);


/* 
//mdn Beispiele
//functions
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
 */
