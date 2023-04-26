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

    cardsAlle(result.index);
    somethingRadios(result.index);
    dropdownBeschaeftigte(result.index);
    // return result.index;
    // const berlinBeteiligungen = result.index;
    // return berlinBeteiligungen;
  }) // if a problem, display error
  .catch(function (error) {
    console.log("error :>> ", error);
  });

// BUTTON
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

//
//
// Radio Inputs
// loop through radios
function loopRadios() {
  for (
    let i = 0;
    i < document.getElementsByClass.form - check - input.length;
    i++
  ) {}
}

function somethingRadios(data) {
  //find all radio buttons
  let allRadioButtons = document.getElementsByClassName("form-check-input");
  // console.log("allRadioButtons :>> ", allRadioButtons);
  // loop to see which was picked
  for (let i = 0; i < allRadioButtons.length; i++) {
    // console.log("allRadioButtons[i] :>> ", allRadioButtons[i]);
    allRadioButtons[i].addEventListener("change", function () {
      console.log("value of Radiobuttons", allRadioButtons[i].value);
      // filterRadios(data, allRadioButtons[i].value);
      filterRadios(data);
    });
  }
  //    only finds a single Radio
  //    const radiosUmsatz = document
  //   .getElementById("less1") //instead of less1 variable from loop
  //   .addEventListener("click", function () {
  //     // trigger filter function
  //     console.log("radioUmsatz (erster) :>> ", radiosUmsatz);
  //     // data.forEach((firstParameter) => {});
  //   });
}

let filterRadios = (dataresults) => {
  console.log("dataresults :>> ", dataresults);
  // console.log("value :>> ", value);// this would work only if we recieve value as argument

  //find the checked radio button
  let checkedRadio = document.querySelector("input[type='radio']:checked");
  console.log("checkedRadio.value :>> ", checkedRadio.value);
  let filteredResults = [];

  for (let i = 0; i < dataresults.length; i++) {
    // console.log("dataresults.umsatz :>> ", dataresults[i].umsatz);
    if (dataresults[i].umsatz < checkedRadio.value) {
      filteredResults.push(dataresults[i]);
    }

    /* // same but with .filter
  let filteredResults = dataresults.filter((singleData) => {
    return singleData.umsatz < checkedRadio.value;
  }); */
    cardsAlle(filteredResults);
    console.log("filteredResults :>> ", filteredResults);
  }
};

// Dropdown
function dropdownBeschaeftigte(data) {
  // find the options
  // console.log("data :>> ", data);
  let allDropDown = document.getElementsByTagName("option");

  // console.log("allDropDown :>> ", allDropDown);
  // for (let i = 0; i < allDropDown.length; i++) {
  //   console.log("allDropDown[i] :>> ", allDropDown[i]);
  //   allDropDown[i].addEventListener("change", function () {
  //     console.log("allDropDown[i].value :>> ", allDropDown[i].value);
  //     // filterOptions(data);
  //   });
  // }

  const select = document.getElementById("beschaeftigte");
  // console.log("select :>> ", select);
  select.addEventListener("change", function () {
    // findSelectOption(data);
    console.log("select value :>> ", select.value);
    filterBySelect(data);
  });
}

function findSelectOption(data) {
  // console.log("data :>> ", data);
  let allDropDown = document.getElementsByTagName("option");

  for (let i = 0; i < allDropDown.length; i++) {
    if (allDropDown[i].selected === true) {
      // console.log("allDr :>> ", allDropDown[i].value);
      filterBySelect(allDropDown[i].value, data);
    }
  }
}

const filterBySelect = (data) => {
  console.log("data", data);
  // console.log("value :>> ", value);
  const selectValue = document.getElementById("beschaeftigte").value;

  let filteredData = [];

  for (let i = 0; i < data.length; i++) {
    if (+data[i].beschaeftigte > +selectValue) {
      filteredData.push(data[i]);
    }
  }
  console.log("filteredData :>> ", filteredData);
  cardsAlle(filteredData);
};
//new try dropdown
/* const eventListenerDropDown = document
  .getElementsByTagName("option")
  .addEventListener("change", (event) => {
    console.log("dropdown new try");
  }); */

let filterOptions = (data) => {
  console.log("data in filterOptions :>> ");
};

// CREATE CARDS
// create cards with bootstrap: has to have the concatination, names, styles bootsrap requires. look up: bootstrap-->components-->card
function cardsAlle(data) {
  console.log("data :>> ", data);
  let container = document.getElementById("container");
  // "" empty sting resets so the new cards are not added but the only cards displayed
  container.innerText = "";
  for (let i = 0; i < data.length; i++) {
    // get right position in html
    // create div for card
    let cardDiv = document.createElement("div");
    // make the card layout apply the bootstrap grid
    cardDiv.setAttribute(
      "class",
      "col-4 col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-4 m-2"
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

    // create image
    let img = document.createElement("img");
    img.classList.add("card.img-top");
    img.setAttribute(
      "src",
      `https://www.berlin.de/sen/finanzen/vermoegen/beteiligungen/beteiligungsdatenbank/${data[i].logo}`
    ); //after writing data[i]. it is possible to choose from the object elements. if they are named with spaces they need to be in [""]

    //alt does not exist for logo :-(
    img.setAttribute("alt", `Logo von ${data[i].unternehmen}`);

    // bootstrap requires another div for the text info of the card
    let cardBody = document.createElement("div");

    cardBody.classList.add("card-body");

    // create headline of the card like bootstrap requires
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    // put actual text into the h5 element
    h5.innerText = data[i].unternehmen;

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = `Umsatz: ${data[i].umsatz} Mio. €`;

    let p2 = document.createElement("p");
    p2.classList.add("card-text");
    p2.innerText = `Beschäftigte: ${data[i].beschaeftigte}`;

    let p3 = document.createElement("p");
    p3.classList.add("card-text");
    p3.innerText = `Beteiligungsanteil, den die Stadt Berlin hält: ${data[i].anteil}%`;

    let footerDiv = document.createElement("div");
    footerDiv.classList.add("card-footer");

    let urlDisplay = document.createElement("a");
    urlDisplay.classList.add("aInFooterDiv");
    urlDisplay.target = "_blank";
    urlDisplay.href = `https:/${data[i].internet}`;
    urlDisplay.innerText = data[i].internet;

    // appends don't have to be at the end, but easyier to get overview (chronology of writing up to down here, js reads from top down)
    // 3. things inside cardBody
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(p2);
    cardBody.appendChild(p3);
    cardBody.appendChild(footerDiv);
    // 4.
    footerDiv.appendChild(urlDisplay);

    // 2. append image to the card, append cardBody to card
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // 1.put the card into the container in the html
    container.appendChild(cardDiv);
  }
}

//1. create the intputs in HTML
//2. create a function to add events to those inputs.
//3. Inside the callback of that event, we should call a function that is gonna do the filtering
//4. Create the function which is gonna filter the data. That function should recieve the array of companies
//5. Inside that function we need to know one thing : the option we selected.
//6. Use that selected option as criteria to filter the data using .filter()
//7. after filtering, call cardsAlle() again, sending the array of filtered results.
