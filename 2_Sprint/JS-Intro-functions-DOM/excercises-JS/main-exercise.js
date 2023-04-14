console.log("++++++++++++Exercise 1 - 5 +++++++++++++++++++");
// Exercise 1
var myName = "Martha";
console.log("My name is:", myName);

// Exercise 2
var anAge = 89;
console.log("anAge :", anAge);

// Exercise 3
var juliaAge = 32
var ageDiff =  (anAge - juliaAge)
console.log(ageDiff);

// Exercise 4
var age21 = 21;
if (age21 < anAge){
    console.log("You are older than 21");
} else if (age21 === anAge) {
    console.log("you are 21");
} else {
    console.log("you are younger than 21");
}

// Exercise 5
if (juliaAge < anAge){
    console.log("Julia is younger than you");
} else if (juliaAge === anAge) {
    console.log("You have the same age as Julia");
} else {
    console.log("Julia is older than you");
}

console.log("++++++++++++Exercise 6 +++++++++++++++++++");
// Exercise 6
var phoenixMembers = ["Sonja", "Martha", "Mila", "Sabir", "Alireza", "Phouc", "Melissa", "Raul", "Heron"]; 
let phoenixesSorted = phoenixMembers.sort();
console.log("Names sorted alphabetical:", phoenixesSorted);
console.log("first name in alphabetical order:", phoenixesSorted[0]);
let phoenxisesRevers = phoenixMembers.reverse();
console.log('phoenixMembers :>> ', phoenixMembers);
console.log("Names sorted alphabetical backwards:", phoenxisesRevers);
console.log("first name in alphabetical reverse order:", phoenxisesRevers[0]);

for (var i = 0; i < phoenixesSorted.length; i++) {
    console.log (phoenixesSorted[i], " is in position", + i) 
    } 
  /* why is phoenixesSorted backwards tough not overwritten? --> JS overwrites the original array everytime
    why is the last index position not 8 but 9 while <= --> index starts from 0-x but .length starts from 1-y
    */

console.log("++++++++++++Exercise 7 +++++++++++++++++++");    
// Exercise 7
//  for statement
var age = [20, 23, 27, 28, 33, 35, 42, 57, 59, 62, 71, 73];
console.log("Age array: ", age);
for (var a = 0; a < age.length; a++) {
    console.log ("Position age in for loop", a, ": ", age[a]);
} 

// while statement
while (a < age.length) {
    console.log('age in while-loop position', a, 'is', age[a]);
       a++;
}

//only the even numbers in while statement
console.log("print even numbers in while loop >>");
var b = 0;
while (b <= age.length) {
    if (age[b] % 2 === 0) {
   
    console.log('even age in position '+ b + " is "+ age[b]);
}
    b++;
}

// for statement with only even numbers
for (var c = 0; c < age.length; c++) {
    if (age[c] % 2 === 0){
    console.log ("Only even numbers in for loop at position ", c, ": ", age[c]);
} 
}


/*  while statement as function by Raul

function someFunction(age) {
    var a = 0;
console.log("now only even numbers:");
while (a <= age.length) {
    if (age[a] % 2 === 0) {
    var output = 'even age in position'+ a + "is"+ age[a]
    console.log(output);
}
    a++;
}   
} someFunction(age) */

console.log("++++++++++++Exercise 8 & 9 & 10+++++++++++++++++++");
// Exercise 8
var arrayOfNumbers = [23, 89, 8, 3387, 43747, 6, 3883, 35, 40, 3837, 387];

function findSmallestNumber() {
    var smallerNumber = arrayOfNumbers[0]
  //  console.log(smallerNumber);
    for (var counter = 1; counter < arrayOfNumbers.length; counter++){
        if (arrayOfNumbers[counter] < smallerNumber) {
            smallerNumber = arrayOfNumbers[counter];    
            }
    }
    console.log("smallest Number in the array is: ", smallerNumber);
}
findSmallestNumber (arrayOfNumbers);
 
// Exercise 9
function findBiggestNumber() {
    var biggerNumber = arrayOfNumbers[0]
    for (var counter = 0; counter < arrayOfNumbers.length; counter++){
        if (arrayOfNumbers[counter] > biggerNumber) {
            biggerNumber = arrayOfNumbers[counter];
        }
    }
    console.log("biggest Number of the array is: ", biggerNumber);
}
findBiggestNumber (arrayOfNumbers);

// Exercise 10
var arrayNumber = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 8;

function showIndexValue() {
    console.log("Print Number you are looking for", arrayNumber[index])
}
showIndexValue(arrayNumber, index)


// Exercise 11
console.log("++++++++++++Exercise 11 +++++++++++++++++++");
    //Loop over the array and check every number in another loop with every other
    //If appears double, write into an new array
    //to not double the same index always start on index later

var zwischenSpeicher
var arrayDoubleNumbers = []
function findRepeatingNumbers(array) {
    for (var i = 0; i < array.length; i++){
        zwischenSpeicher = array[i];        // Reihenfolge!
// console.log("zwischenSpeicher: ", zwischenSpeicher);       
    for (var a = i+1; a < array.length; a++){   // a = i+1
          if (zwischenSpeicher == array[a]){ 
            arrayDoubleNumbers.push(zwischenSpeicher)
          }}
    }
    console.log('arrayDoubleNumbers :>> ', arrayDoubleNumbers);
}
findRepeatingNumbers(arrayNumber)

// Exercise 12
console.log("++++++++++++Exercise 12 +++++++++++++++++++");
myColor = ["Red", "Green", "White", "Black"];
console.log('typeof myColor :>> ', typeof myColor);

/* let newString = myColor.toString();
console.log('typeof newString :>> ', typeof newString); */

function transformArrayToString(someArray){
let newString = someArray.toString();
console.log('newString :>> ',  newString);
console.log('typeof newString :>> ', typeof newString);
}
transformArrayToString(myColor)

// Exercise 13
console.log("++++++++++++Exercise 13 +++++++++++++++++++");
const x = 32443
function switchNumber(){
var digits = x.toString().split(''); //split('') makes an array
console.log(digits);
var reverseDigits = digits.reverse();
console.log(reverseDigits, typeof reverseDigits);
var reverseString = reverseDigits.join("");
console.log('reverseString :>> ', reverseString);
console.log('reverseString :>> ', reverseString, typeof reverseString);
let reverseNumber = parseFloat(reverseString);
console.log('reverseNumber :>> ', reverseNumber, typeof reverseNumber);
return reverseNumber
}
const nummerDrehen = switchNumber(x);
console.log('return nummerDrehen :>> ', nummerDrehen, typeof nummerDrehen);


// Exercise 14
console.log("++++++++++++Exercise 14 +++++++++++++++++++");
var z = "someperson";
function stringSorted(){
    var y = z.toString().split("");
    console.log(y);
    var w = y.sort();
    console.log(w, typeof w);
    var w = w.join("")
    return w;
   

  /*   var v = w.toString()
    console.log(v); */
}
const irgendeinePerson = stringSorted(z);
console.log("irgendeinePerson: ", irgendeinePerson, typeof irgendeinePerson);

// Exercise 15
console.log("++++++++++++Exercise 15 +++++++++++++++++++");
var m = "prince of persia, better jin, jiyan, azadî";

function capitaliseFirstLetter(fL){ 
   var splitedArrray = fL.split(" ");   // split String into singel words in array
   var newArray1 = [];                  // create new array for final result
   console.log(splitedArrray);
for (var i = 0; i < splitedArrray.length; i++) {
    var firstLetter = splitedArrray[i].charAt(0); // firstLetter = erster Buchstabe des ArrayWortes[i]
    // console.log(firstLetter) 
    var capitaliseFirstLetter = firstLetter.toUpperCase() //firstLetter wird Großbuchstabe
    console.log(capitaliseFirstLetter);
    var restOfWord = splitedArrray[i].slice(1); // schneidet jeweiliges Wort[i]durch 
    var wholeWord = capitaliseFirstLetter + restOfWord;
    console.log(wholeWord);
    newArray1[i] = wholeWord; // new array at position [i] is becoming wholeWord
    console.log("newArray1: ", newArray1);
    
 }  var newSentence = newArray1.join(" "); // making the array become a string
 return newSentence;
 
 }
const jinJianAzadi = capitaliseFirstLetter(m); 
console.log(jinJianAzadi, typeof jinJianAzadi); 

// Exercise 16
console.log("++++++++++++Exercise 16 +++++++++++++++++++");
var n = "Web Development Tutorial"
function findLongestWord(){
// split string into array, count letters of every item with index, compare them. show word with index of the longest item
}
findLongestWord(n);

