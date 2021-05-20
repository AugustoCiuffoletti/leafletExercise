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
var markers = L.layerGroup();
// Add controls for the layer
L.control.layers(
  {},                  // base layers, radio buttons
  {"Markers": markers} // overlay layers, checkbox buttons
).addTo(aMap);

aMap.on("click", e => {
  let n = markers.getLayers().length + 1;
  let displayCoord = document.getElementById('displayCoord');
  let aMarker = L.marker(e.latlng, { title: n }).addTo(aMap);
  markers.addLayer(aMarker);
  displayCoord.innerHTML +=
    n +
    ': ' +
    aMarker.getLatLng().lat.toFixed(5) +
    ', ' +
    aMarker.getLatLng().lng.toFixed(5) +
    '<br>';
});
