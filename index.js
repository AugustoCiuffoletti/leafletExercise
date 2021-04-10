import "./style.css";

var aMap = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
mappa.on("click", e => {
  let displayCoord = document.getElementById("displayCoord");
  let aMarker = L.marker(e.latlng).addTo(aMap);
  displayCoord.innerHTML +=
    aMarker.getLatLng().lat.toFixed(5) + ", " + 
    aMarker.getLatLng().lng.toFixed(5) + "<br>";
});
