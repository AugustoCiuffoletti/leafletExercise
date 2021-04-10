import "./style.css";

var n = 1;
var markers = [];
var aMap = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});

function displayAllCoords() {
  let displayCoord = document.getElementById("displayCoord");
  displayCoord.innerHTML = "";
  for (let i in markers) {
    displayCoord.innerHTML +=
      (Number(i)+1) +
      ": " +
      markers[i].getLngLat().toFixed(5) +
      ", " +
      markers[i].getLngLat().toFixed(5) +
      "<br>";
  }
}

aMap.on("click", e => {
  let aMarker = L.marker(e.latlng, { title: n }).aMarker.addTo(aMap);
  markers.push(aMarker);
  displayAllCoords();
  n++;
});
