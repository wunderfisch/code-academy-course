// following Rauls lecture with his template documents
//* 1 fetching the data...

const url =
  "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3";
const getData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
      const games = result.response;
      // send data to function
      createHtmlTable(games);
      createDropDown(games);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};
getData();

//* 2 function for creating table and dropdown
const createHtmlTable = (games) => {
  let table = document.getElementById("table");

  games.forEach((game) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = game.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = game.competition;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    //* reformat date

    column3.innerText = game.date;
    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");

  // addiontional to the (former games) block below, now used for competitions
  // creat new array with .map
  const competitions = games.map((game) => {
    return game.competition;
  });
  // console.log("competitions :>> ", competitions);
  // get rid of duplicates with new Set()
  // without spread operator we get one an array with one OBJECT with a number of elements
  // spread operator takes every element and puts it into a new array
  // so we get an ARRAY with x elements
  const uniqueCompetitions = [...new Set(competitions)];
  console.log("uniqueCompetitions :>> ", uniqueCompetitions);

  uniqueCompetitions.forEach((singleCompetition) => {
    const option = document.createElement("option");
    option.innerText = singleCompetition;
    option.value = singleCompetition;
    dropdown.appendChild(option);
  });
};

/*   // put things into dropdown 
  // not used anymore
  games.forEach((game) => {
    const option = document.createElement("option");
    option.innerText = game.competition;
    option.value = game.competition;
    dropdown.appendChild(option);
  });
}; */

//* 4 make controller function

function controller() {
  //get the data
  //
  // build table with all data
  //
  //generate DropDown filter options
  //
  //create filter functions
  //
  // set event listeners
}

//*5 add event listeners
const setEventListeners = () => {
  document.querySelector("#date").addEventListener("change", (event) => {});
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {});
};

//* 6 fiter by dropdown
const filterByDropDown = () => {
  // get dropdown value
};

//* 7 fiter by date
const filterByDate = () => {
  // get date value
};

//for you guys :
//9 combine filters
