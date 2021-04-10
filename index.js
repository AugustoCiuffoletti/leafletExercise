import "./style.css";

var n = 1;
var markers = [];
var aMap = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});

function displayAllCoords() {
  let displayCoord = document.getElementById("displayCoord");
  displayCoord.innerHTML = "";
  for (let i in markers) {
    displayCoord.innerHTML +=
      Number(i) +
      1 +
      ": " +
      markers[i].getLatLng().lat.toFixed(5) +
      ", " +
      markers[i].getLatLng().lng.toFixed(5) +
      "<br>";
  }
}

aMap.on("click", e => {
  let aMarker = L.marker(e.latlng, { title: n }).addTo(aMap);
  markers.push(aMarker);
  displayAllCoords();
  n++;
});

newButton.onclick = e => {
  fetch("https://api.keyvalue.xyz/new/dhss2021", {
    method: "POST"
  })
    .then(response => response.text())
    .then(body => {
      document.getElementById("urlBox").value = body;
      document.getElementById("newButton").style.display = "none";
    });
};

saveButton.onclick = e => {
  let featuresCollection = {};
  featuresCollection.type = "FeatureCollection";
  featuresCollection.features = [];
  for (let i in markers) {
    let feature = {};
    feature.type = "Feature";
    feature.title = i;
    feature.geometry = {
      type: "Point",
      coordinates: [markers[i].getLatLng().lng, markers[i].getLatLng().lat]
    };
    featuresCollection.features.push(feature);
  }
  let url = document.getElementById("urlBox").value;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(featuresCollection)
  });
};

loadButton.onclick = e => {
  for (let i in markers) {
    aMap.removeLayer(markers[i]);
  }
  markers = [];
  let url = document.getElementById("urlBox").value;
  fetch(url)
    .then(response => response.json())
    .then(payload => {
      let features = payload.features;
      n = features.length + 1;
      for (let i in features) {
        let coord = L.latLng(
          features[i].geometry.coordinates[1],
          features[i].geometry.coordinates[0]
        );
        let aMarker = L.marker(coord, { title: i }).addTo(aMap);
        markers.push(aMarker);
      }
      displayAllCoords();
    });
};
