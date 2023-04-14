console.log("data", data);
console.log("data[0].unternehmen", data[0].unternehmen);

for (let i = 0; i < data.length; i++) {
  var tBody = document.getElementById("tBody");
  console.log("tBody :>> ", tBody);

  var tr = document.createElement("tr");
  var id = document.createElement("td");
  id.innerText = data[i].id;
  console.log("id :>> ", id);

  var unternehmen = document.createElement("td");
  unternehmen.innerText = data[i].unternehmen;

  var anteil = document.createElement("td");
  anteil.innerText = data[i].anteil;

  var bilanzsumme = document.createElement("td");
  bilanzsumme.innerText = data[i].bilanzsumme;

  var umsatz = document.createElement("td");
  umsatz.innerText = data[i].umsatz;

  tr.appendChild(id);
  tr.appendChild(unternehmen);
  tr.appendChild(anteil);
  tr.appendChild(bilanzsumme);
  tr.appendChild(umsatz);

  tBody.appendChild(tr);
}
