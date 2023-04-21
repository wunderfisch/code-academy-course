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
    cardsAlle(result.index);
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
    console.log("tBody :>> ", tBody);

    // one row for each object
    var tr = document.createElement("tr");

    // first colum holds the id, put in there with innerText
    var id = document.createElement("td");
    id.innerText = data[i].id;
    console.log("id :>> ", id);

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
tabelleAlle();

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

// CREATE CARDS
// create cards with bootstrap: has to have the concatination, names, styles bootsrap requires. look up: bootstrap-->components-->card
function cardsAlle(data) {
  for (let i = 0; i < data.length; i++) {
    // get right position in html
    let container = document.getElementById("container");
    // create div for card
    let cardDiv = document.createElement("div");
    // make the card layout apply the bootstrap grid
    cardDiv.setAttribute(
      "class",
      "col-4 col-xs-12 col-sm-3 col-md-4 col-lg-2 col-xl-4"
    );
    // assigne a class that is named correctly like the bootstrap class!
    cardDiv.classList.add("card");

    // set the bootstrap style
    // cardDiv.setAttribute("style", "width: 18rem;");
    // end of creating the empty cards (+appendChild(cardDiv) so it is put to the right place)
    // background color of the cards
    if (i % 2 === 0) {
      cardDiv.classList.add("text-bg-dark");
    }
    /*    // create image
    let img = document.createElement("img");
    img.classList.add("card.img-top");
    img.setAttribute("src", data[i].logo); //after writing data[i]. it is possible to choose from the object elements. if they are named with spaces they need to be in [""]
   //alt and title do not exist for logo :-( 
  img.setAttribute("alt", data[i].   .alt);
  img.setAttribute("title", data[i].  .title); */

    // bootstrap requires another div for the text info of the card
    let cardBody = document.createElement("div");
    cardDiv.classList.add("card-body");

    // create headline of the card like bootstrap requires
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    // put actual text into the h5 element
    h5.innerText = data[i].unternehmen;

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = data[i].internet;

    // appends don't have to be at the end, but easyier to get overview (chronology of writing up to down here, js reads from top down)
    // 3 & 4. append headline into the cardBody
    cardBody.appendChild(h5);
    cardBody.appendChild(p);

    // 2. append image to the card, append cardBody
    // cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // 1.put the card into the container in the html
    container.appendChild(cardDiv);
  }
}
cardsAlle();
