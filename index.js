import "./style.css";

var n = 1;
var elencoCoordinate = document.getElementById("coord");
var bottoneSalva = document.getElementById("bottoneRegistra");
var bottoneCarica = document.getElementById("bottoneCarica");
var coordinate = [];
var mappa = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
function visualizzaCoordinate() {
  elencoCoordinate.innerHTML = "";
  for (let i in coordinate) {
    elencoCoordinate.innerHTML +=
      Number(i) +
      1 +
      ": " +
      coordinate[i].lat.toFixed(5) +
      ", " +
      coordinate[i].lng.toFixed(5) +
      "<br>";
  }
}
mappa.on("click", e => {
  L.marker(e.latlng, { title: n }).addTo(mappa);
  coordinate.push(e.latlng);
  visualizzaCoordinate();
  n++;
});

bottoneSalva.onclick = e => {
  let url = document.getElementById("urlBox").value;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(coordinate)
  });
};

newButton.onclick = e => {
  fetch("https://api.keyvalue.xyz/new/dhss2021", {
    method: "POST"
  })
  .then( response => response.text() )
  .then( body => {
    document.getElementById("urlBox").value = body;
    document.getElementById("newButton").style.display = "none";} );
}

bottoneCarica.onclick = e => {
  let url = document.getElementById("urlBox").value;
  fetch(url)
  .then( response => response.json() )
  .then( dati => {
    coordinate = dati;
    n = coordinate.length + 1;
    for ( let i in coordinate ) {
      let c = L.latLng(coordinate[i]);
      L.marker( c, { title: i }).addTo(mappa);
    }
    visualizzaCoordinate();
  } )
};
