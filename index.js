import "./style.css";

var n = 1;

var aMap = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});

aMap.on("click", e => {
  let displayCoord = document.getElementById("displayCoord");
  let aMarker = L.marker(e.latlng, { title: n }).addTo(aMap);
  displayCoord.innerHTML +=
    n +
    ": " +
    aMarker.getLatLng().lat.toFixed(5) +
    ", " +
    aMarker.getLatLng().lng.toFixed(5) +
    "<br>";
  n++;
});
