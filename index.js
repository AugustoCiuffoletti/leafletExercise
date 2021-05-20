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
// An array of markers
var markers = L.layerGroup();
markers.addTo(aMap);
// Add controls for the layer
L.control
  .layers(
    {}, // base layers, radio buttons
    { Markers: markers } // overlay layers, checkbox buttons
  )
  .addTo(aMap);

aMap.on('click', e => {
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

newButton.onclick = e => {
  fetch('https://api.keyvalue.xyz/new/dhss2021', {
    method: 'POST'
  })
    .then(response => response.text())
    .then(body => {
      let url = body;
      document.getElementById('urlBox').value = url;
      console.log();
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(JSON.stringify(markers.toGeoJSON()))
      }).then(
        body => {
          document.getElementById('newButton').style.display = 'none';
          document.getElementById('saveButton').style.display = 'true';
          document.getElementById('loadButton').style.display = 'true';
        },
        err => console.log(err)
      );
    });
};

saveButton.onclick = e => {
  let url = document.getElementById('urlBox').value;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(JSON.stringify(markers.toGeoJSON()))
  });
};

loadButton.onclick = e => {
  let url = document.getElementById('urlBox').value;
  let displayCoord = document.getElementById('displayCoord');
  markers.clearLayers();
  fetch(url)
    .then(response => response.json())
    .then(payload => {
      let layer = JSON.parse(payload);
      for (let i in layer.features) {
        let coord = L.latLng([
          layer.features[i].geometry.coordinates[1],
          layer.features[i].geometry.coordinates[0]
        ]);
        let aMarker = L.marker(coord, { title: Number(i) + 1 });
        markers.addLayer(aMarker);
        displayCoord.innerHTML +=
          ( Number(i) + 1 ) +
          ': ' +
          coord.lat.toFixed(5) +
          ', ' +
          coord.lng.toFixed(5) +
          '<br>';
      }
      // displayAllCoords();
    });
};
