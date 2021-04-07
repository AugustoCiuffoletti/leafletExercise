import "./style.css";

var n = 1;
var elencoCoordinate = document.getElementById("coord");
var coordinate = [];
var mappa = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
function stampaCoordinate() {
  let s = "";
  for (i in coordinate ) {
    s += (i+1) + ": " + coordinate[i].lat.toFixed(2) + ", " + coordinate[i].lat.toFixed(2) + "<br>";
  }
  return s;
}
mappa.on("click", e => {
  L.marker(e.latlng, { title: n }).addTo(mappa);
  coordinate.push(e.latlng);
  elencoCoordinate.innerHTML=stampaCoordinate();
  n++;
});
