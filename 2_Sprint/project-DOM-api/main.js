// gibt die Daten der response.js zur console
console.log("data", data);
// gibt die Daten des ersten elements im array an die console
console.log("data[0].unternehmen", data[0].unternehmen);

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
