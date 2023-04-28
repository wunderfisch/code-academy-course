fetch(
  "https://www.berlin.de/sen/finanzen/vermoegen/beteiligungen/beteiligungsdatenbank/index.php/index/all.json?q="
)
  .then(function (response) {
    // response is the resolved promise
    console.log("resonse :>> ", response);
    return response.json();
  })
  .then(function (result) {
    // result is the resolved promise of making data to a .json
    console.log("result :>> ", result.index);
    filterUmsatz(result.index, 1, 0);
    filterUmsatz(result.index, 5, 1);
    filterUmsatz(result.index, 50, 100);
    filterUmsatz(result.index, 100, 10000);

    // return result.index;
    // const berlinBeteiligungen = result.index;
    // return berlinBeteiligungen;
  }) // if a problem, display error
  .catch(function (error) {
    console.log("error :>> ", error);
  });

function filterUmsatz(data, num, num2) {
  //do filtering
  let kleinerEins = data.filter(
    (firstParameter) => parseFloat(firstParameter.umsatz) < num
    // && > num2
  );
  console.log("filterUmsatz :>> ", kleinerEins);
  return kleinerEins;
}

// Radio Inputs
// does not work
/* function somethingRadios() {
  const radiosUmsatz = document
    .getElementById("less1")
    .addEventListener("change", function filterUmsatz(result.index, 1) {
      console.log("less1 is clicked");
    });
}
somethingRadios(); */

// ++++ RESTERAMPE ++++
// Button
// implemented 2 times in html, why do they not count together?
function clickHere() {
  console.log("clicked");
}
/* 
// button with EventListener for action
// get button
var secondButton = document.getElementById("secondButton");
// function to be called (functionality does not make sense right now, better get a filter later...)
function changeColor() {
  container.classList.toggle("light");
}
// function call as callback function
secondButton.addEventListener("click", changeColor); */

// for Radiobuttons:
//    only finds a single Radio
//    const radiosUmsatz = document
//   .getElementById("less1") //instead of less1 variable from loop
//   .addEventListener("click", function () {
//     // trigger filter function
//     console.log("radioUmsatz (erster) :>> ", radiosUmsatz);
//     // data.forEach((firstParameter) => {});
//   });

// wrongly looping over select options/ does not take loop
// console.log("allDropDown :>> ", allDropDown);
// for (let i = 0; i < allDropDown.length; i++) {
//   console.log("allDropDown[i] :>> ", allDropDown[i]);
//   allDropDown[i].addEventListener("change", function () {
//     console.log("allDropDown[i].value :>> ", allDropDown[i].value);
//     // filterOptions(data);
//   });
// }

// ROADMAP FOR FILTER FUNCTION

//1. create the intputs in HTML
//2. create a function to add events to those inputs.
//3. Inside the callback of that event, we should call a function that is gonna do the filtering
//4. Create the function which is gonna filter the data. That function should recieve the array of companies
//5. Inside that function we need to know one thing : the option we selected.
//6. Use that selected option as criteria to filter the data using .filter()
//7. after filtering, call cardsAlle() again, sending the array of filtered results.
