import './style.css';

var mappa = L.map('mapid',{
  center: L.latLng(43.7229, 10.3966), 
  zoom: 15,
  layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      ]}
);
var pallino = L.marker(L.latLng(43.72, 10.40));
pallino.addTo(mappa);
pallino.bindPopup("<b>Arrotondiamo!</b><br>Questo punto ha le coordinate arrotondate.");
pallino.openPopup();