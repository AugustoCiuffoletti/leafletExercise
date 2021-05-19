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
// Attach a callback to the click event. The callback displays the alert
aMap.on('click', e =>
  alert('Hai puntato ' + e.latlng.lat + ',' + e.latlng.lng)
);
