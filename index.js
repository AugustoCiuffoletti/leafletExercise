import "./style.css";

var n = 1;
var apiKey = "f40aade2";
var URL = 'https://api.keyvalue.xyz/' + apiKey + '/myKey'
var elencoCoordinate = document.getElementById("coord");
var bottoneSalva = document.getElementById("bottoneRegistra");
var bottoneCarica = document.getElementById("bottoneCarica");

var coordinate = [];
var mappa = L.map("mapid", {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15,
  layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")]
});
function visualizzaCoordinate() {
  elencoCoordinate.innerHTML = "";
  for (let i in coordinate) {
    elencoCoordinate.innerHTML +=
      Number(i) +
      1 +
      ": " +
      coordinate[i].lat.toFixed(5) +
      ", " +
      coordinate[i].lng.toFixed(5) +
      "<br>";
  }
}
mappa.on("click", e => {
  L.marker(e.latlng, { title: n }).addTo(mappa);
  coordinate.push(e.latlng);
  visualizzaCoordinate();
  n++;
});

bottoneSalva.onclick = e => {
  fetch('https://api.keyvalue.xyz/f40aade2/myKey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(coordinate)
  });
};

bottoneCarica.onclick = e => {
  coordinate = [];
  fetch('https://api.keyvalue.xyz/f40aade2/myKey')
  .then( (response) => response.json() )
  .then( (dati) => {
    for ( let i in dati ) {
      let c = L.latLng(dati[i]);
      L.marker( c, { title: i }).addTo(mappa);
      coordinate.push(c);
      visualizzaCoordinate();
    }
  } )
};
