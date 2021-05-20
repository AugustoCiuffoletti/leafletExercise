import "./style.css";

// Coordinates for the tower of Pisa
var centerLat = 43.72301;
var centerLong = 10.39663;
// Display the map
var aMap = L.map('mapid', {
  center: L.latLng(centerLat, centerLong),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
// An array of markers
var markers = [];


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
  let aMarker = L.marker(e.latlng, { title: n }).addTo(aMap);
  markers.push(aMarker);
  displayAllCoords();
});
