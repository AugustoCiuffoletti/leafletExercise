import './style.css';

var baseURL =
  'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/dhss21-mczua/service/svc/incoming_webhook';
var markers = [];
var aMap = L.map('mapid', {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
});

function displayAllCoords() {
  let displayCoord = document.getElementById('displayCoord');
  displayCoord.innerHTML = '';
  markers.forEach((marker, i) => {
    displayCoord.innerHTML +=
      Number(i) +
      1 +
      ': ' +
      marker.getLatLng().lat.toFixed(5) +
      ', ' +
      marker.getLatLng().lng.toFixed(5) +
      '<br>';
  });
}

aMap.on('click', e => {
  let aMarker = L.marker(e.latlng).addTo(aMap);
  markers.push(aMarker);
  displayAllCoords();
});

newButton.onclick = e => {
  console.log("Ecco");
  fetch(baseURL+'/getKey', { method: 'POST' })
  .then(response => response.text())
  .then(body => {
    let key = JSON.parse(body);
    fetch(baseURL+'/setValue'+'?key='+key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(markers.toGeoJSON())
    }).then(
      () => {
        console.log("Success");
        document.getElementById('keyBox').value = key;
        document.getElementById('newButton').style.display = 'none'
      },
      err => console.log(err)
    );
  });
};

saveButton.onclick = e => {
  let key = document.getElementById('keyBox').value;
  console.log(key);
  fetch(baseURL + '/setValue' + '?key=' + key, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(markers.toGeoJSON())
  });
  console.log(JSON.stringify(markers.toGeoJSON()));
};
