import "./style.css";

var listaCoordinate = document.getElementById("coord");
var mappa = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
mappa.on("click", e => {
  L.marker(e.latlng).addTo(mappa);
  listaCoordinate.innerHTML +=
    e.latlng.lat.toFixed(5) + ", " + e.latlng.lng.toFixed(5) + "<br>";
});
