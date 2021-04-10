import './style.css';

var aMap = L.map('mapid',{
  center: L.latLng(43.7229, 10.3966), 
  zoom: 15,
  layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      ]}
);
var aMarker = L.marker(L.latLng(43.72, 10.40));
aMarker.addTo(aMap);
aMarker.bindPopup("<b>Rounding!</b><br>This point has coordinates rounded to 2 digits.<br>Notice the distance from the center map!.");
aMarker.openPopup();