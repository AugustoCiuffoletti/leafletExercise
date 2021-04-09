import "./style.css";

var n = 1;
var elencoCoordinate = document.getElementById("coord");
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
      (Number(i)+1) +
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

newButton.onclick = e => {
  fetch("https://api.keyvalue.xyz/new/myKey", {
    method: "POST"
  })
  .then( response => response.text() )
  .then( body => document.getElementById("urlBox").value = body );
}