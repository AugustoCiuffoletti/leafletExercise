import "./style.css";

var markers = [];
var aMap = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});

function displayAllCoords() {
  let displayCoord = document.getElementById("displayCoord");
  displayCoord.innerHTML = "";
  markers.forEach( (marker,i) => {
    displayCoord.innerHTML +=
      (Number(i)+1) +
      ": " +
      marker.getLatLng().lat.toFixed(5) +
      ", " +
      marker.getLatLng().lng.toFixed(5) +
      "<br>";
  } )
}

aMap.on("click", e => {
  let aMarker = L.marker(e.latlng).addTo(aMap);
  markers.push(aMarker);
  displayAllCoords();
});
