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
      (Number(i)+1) +
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
  fetch("https://api.keyvalue.xyz/new/myKey", {
    method: "POST"
  })
  .then( response => response.text() )
  .then( body => {
    document.getElementById("urlBox").value = body;
    document.getElementById("newButton").style.display = "none";} );
}

saveButton.onclick = e => {
  let url = document.getElementById("urlBox").value;
  let coordinates = markers.map( m => m.getLatLng() );
  fetch(url, {
    method: "POST",
    body: JSON.stringify(coordinates)
  });
};
