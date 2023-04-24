fetch(
  "https://www.berlin.de/sen/finanzen/vermoegen/beteiligungen/beteiligungsdatenbank/index.php/index/all.json?q="
)
  .then(function (response) {
    // response is the resolved promise
    console.log("resonse :>> ", response);
    //breaks with this: console.log("response in json : ", response.json());
    return response.json();
  })
  .then(function (result) {
    // result is the resolved promise of making data to a .json
    console.log("result :>> ", result.index);
    tabelleAlle(result.index);

    // return result.index;
    // const berlinBeteiligungen = result.index;
    // return berlinBeteiligungen;
  }) // if a problem, display error
  .catch(function (error) {
    console.log("error :>> ", error);
  });

/* use this with static data:
  // gibt die Daten der response.js zur console
console.log("data", data);
// gibt die Daten des ersten elements im array an die console
console.log("data[0].unternehmen", data[0].unternehmen);
 */

function tabelleAlle(data) {
  for (let i = 0; i < data.length; i++) {
    // everything should be in tbody
    var tBody = document.getElementById("tBody");
    // console.log("tBody :>> ", tBody);

    // one row for each object
    var tr = document.createElement("tr");

    // first colum holds the id, put in there with innerText
    var id = document.createElement("td");
    id.innerText = data[i].id;
    // console.log("id :>> ", id);

    // second colum holds name/ unternehmen
    var unternehmen = document.createElement("td");
    unternehmen.innerText = data[i].unternehmen;

    //third colum
    var anteil = document.createElement("td");
    anteil.innerText = data[i].anteil;

    // forth
    var bilanzsumme = document.createElement("td");
    bilanzsumme.innerText = data[i].bilanzsumme;

    // fifth
    var umsatz = document.createElement("td");
    umsatz.innerText = data[i].umsatz;

    // put tr element into the tBody
    tBody.appendChild(tr);

    // put elements into tr
    tr.appendChild(id);
    tr.appendChild(unternehmen);
    tr.appendChild(anteil);
    tr.appendChild(bilanzsumme);
    tr.appendChild(umsatz);
  }
}
// tabelleAlle();

// BUTTON
// implemented 2 times in html, why do they not count together?
function clickHere() {
  console.log("clicked");
}

// button with EventListener for action
// get button
var secondButton = document.getElementById("secondButton");
// function to be called (functionality does not make sense right now, better get a filter later...)
function changeColor() {
  container.classList.toggle("light");
}
// function call as callback function
secondButton.addEventListener("click", changeColor);

let inputContainer = document.getElementById("inputContainer");
let newInput = document.createElement("input");
newInput.setAttribute("type", "checkbox");
console.log("newInput :>> ", newInput);
inputContainer.appendChild(newInput);
