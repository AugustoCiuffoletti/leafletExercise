import "./style.css";

// Coordinates for the tower of Pisa
var centerLat = 43.7229;
var centerLong = 10.3966;
// Coordinates for the point feature
var pointLat = Math.round(centerLat * 100) / 100;
var pointLong = Math.round(centerLong * 100) / 100;

// Define a map
var aMap = L.map("mapid", {
  center: L.latLng(centerLat, centerLong),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
// Define (using a constructor) a point feature
var aMarker = L.marker(L.latLng(pointLat, pointLong));
// Attach a popup
aMarker.bindPopup(
  "<b>Rounding!</b><br>This point has coordinates rounded to 2 digits.<br>Notice the distance from the center map!."
);
// Draw the point feature to the map
aMarker.addTo(aMap);
// Display the popup
aMarker.openPopup();
