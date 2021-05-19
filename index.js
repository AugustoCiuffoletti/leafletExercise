import './style.css';

// Coordinates for the tower of Pisa
var centerLat = 43.72301;
var centerLng = 10.39663;
// Coordinates for the point feature
var pointLat = centerLat.toFixed(2);
var pointLng = centerLng.toFixed(2);

// Define a map
var aMap = L.map('mapid', {
  center: L.latLng(centerLat, centerLng),
  zoom: 15,
  layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
});
// Define (using a constructor) a point feature
var aMarker = L.marker(L.latLng(pointLat, pointLng));
// Attach a popup
aMarker.bindPopup(
  '<b>Rounding!</b><br>This point has coordinates rounded to 2 digits.<br>Notice the distance from the Tower!'
);
// Draw the point feature to the map
aMarker.addTo(aMap);
// Display the popup
aMarker.openPopup();
