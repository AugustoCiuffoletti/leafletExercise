import './style.css';

// Coordinates for the tower of Pisa
var centerLat = 43.72301;
var centerLong = 10.39663;
// Display the map
var aMap = L.map('mapid', {
  center: L.latLng(centerLat, centerLong),
  zoom: 15,
  layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
});

// Attach a mre complex callback to the click event
aMap.on('click', e => {
  // Get a handle for the DOM element containing the list of coordinates
  let displayCoord = document.getElementById('displayCoord');
  // Add a marker with the coordinates in the event descriptor
  let aMarker = L.marker(e.latlng).addTo(aMap);
  // Concatenate the new coordinates in the DOM element
  displayCoord.innerHTML +=
    aMarker.getLatLng().lat.toFixed(5) + // truncate coordinates
    ', ' +
    aMarker.getLatLng().lng.toFixed(5) +
    '<br>';
});
