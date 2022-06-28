function showCoords(event) {
  var x = event.screenX;
  var y = event.screenY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);
  document.getElementById("coordinates").innerHTML = coords;
}
