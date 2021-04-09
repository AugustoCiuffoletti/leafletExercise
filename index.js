import "./style.css";

var n = 1;
var elencoCoordinate = document.getElementById("coord");
var bottoneSalva = document.getElementById("bottoneRegistra");
var bottoneCarica = document.getElementById("bottoneCarica");

var featuresCollection = {};
featuresCollection.type = "FeatureCollection";
featuresCollection.features = [];
var mappa = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
function visualizzaCoordinate() {
  elencoCoordinate.innerHTML = "";
  for (let i in featuresCollection.features) {
    let f = featuresCollection.features[i];
    elencoCoordinate.innerHTML +=
      Number(i) +
      1 +
      ": " +
      f.geometry.coordinates[1].toFixed(5) +
      ", " +
      f.geometry.coordinates[0].toFixed(5) +
      "<br>";
  }
}

mappa.on("click", e => {
  let x = L.marker(e.latlng, { title: n }).addTo(mappa);
  let feature = {};
  feature.type = "Feature";
  feature.title = n;
  feature.geometry = {
    type: "Point",
    coordinates: [e.latlng.lng, e.latlng.lat]
  };
  featuresCollection.features.push(feature);
  visualizzaCoordinate();
  n++;
});

bottoneSalva.onclick = e => {
  let url = document.getElementById("urlBox").value;
  n = featuresCollection.features.length + 1;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(featuresCollection)
  });
};

bottoneCarica.onclick = e => {
  let url = document.getElementById("urlBox").value;
  fetch(url)
  .then( response => response.json())
  .then( dati => {
    featuresCollection = dati;
    n = featuresCollection.features.length + 1;
    L.geoJSON(featuresCollection, {
      onEachFeature: (f, l) => (l.options.title = f.title)
    }).addTo(mappa);
    visualizzaCoordinate();
  });
};
