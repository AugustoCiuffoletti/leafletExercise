import "./style.css";

var n = 1;
var apiKey = "";
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
    elencoCoordinate.innerHTML +=
      Number(i) +
      1 +
      ": " +
      featuresCollection.features[i].lat.toFixed(5) +
      ", " +
      featuresCollection.features[i].lng.toFixed(5) +
      "<br>";
  }
}
mappa.on("click", e => {
  let x = L.marker(e.latlng, { title: n }).addTo(mappa);
  console.log(x);
  let feature = {};
  feature.type = "Feature";
  feature.title = n;
  feature.geometry = {
    type: "Point",
    coordinates: [e.latlng.lng, e.latlng.lat]
  };
  featuresCollection.features.push(feature);
  //visualizzaCoordinate();
  console.log(featuresCollection);
  n++;
});

bottoneSalva.onclick = e => {
  let apiKey = document.getElementById("key").value;
  fetch("https://api.keyvalue.xyz/" + apiKey + "/myKey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(featuresCollection)
  });
};

bottoneCarica.onclick = e => {
  featuresCollection = {};
  let apiKey = document.getElementById("key").value;
  fetch("https://api.keyvalue.xyz/" + apiKey + "/myKey")
    .then(response => response.json())
    .then(dati => {
      featuresCollection = dati;
      L.geoJSON(featuresCollection, {
        onEachFeature: (f, l) => (l.options.title = f.title)
      }).addTo(mappa);
      n = featuresCollection.features.length + 1;
    });
};
