// exercise 17
// get element
let favoriteBands = document.getElementById("band-list");
console.log("get favoriteBands :>> ", favoriteBands);

// create one element
let newList = document.createElement("li");
newList.innerText = "some input";
favoriteBands.appendChild(newList);

// create 3 li with loop
function fillBandList() {
  for (let i = 0; i < threeBands.length; i++) {
    let newList = document.createElement("li");
    newList.innerText = threeBands[i];
    favoriteBands.appendChild(newList);
  }
}
let threeBands = ["Band 1", "Band 2", "Band 3"];
fillBandList(threeBands);

// exercise 18
// get element
let tablePlace = document.getElementById("table");
console.log("tablePlace :>> ", tablePlace);

function addMultTable(rows, cols) {
  let newTable = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    // creating rows
    let row = document.createElement("tr");
    // creating colums
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("td");
      // creating text inside with template literals
      let textInTable = document.createTextNode(`row ${i}, column ${j}`);
      console.log("textInTable :>> ", textInTable);
      col.appendChild(textInTable);
      row.appendChild(col);
    }
    newTable.appendChild(row);
  }
  tablePlace.appendChild(newTable);
}
addMultTable(3, 7);
