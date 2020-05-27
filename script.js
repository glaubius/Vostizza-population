var map = L.map('map', {
  center: [38.1500, 22.2133],
  zoom: 11,
  scrollWheelZoom: false
});

new L.StamenTileLayer("terrain").addTo(map);
