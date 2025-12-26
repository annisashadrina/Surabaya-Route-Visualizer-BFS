import { locations } from './graph.js';

let map;
let markers = {};
let routeLayer = null;

// Inisialisasi peta Surabaya dengan Leaflet
function initMap() {
  map = L.map('map').setView([-7.2892, 112.7381], 13); // Fokus Surabaya
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Tambah marker untuk setiap lokasi
  Object.keys(locations).forEach(loc => {
    const { lat, lng } = locations[loc];
    markers[loc] = L.marker([lat, lng]).addTo(map).bindPopup(loc);
  });

  // Tambah warna berbeda untuk marker (opsional untuk lebih menarik)
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f093fb', '#a8edea', '#fed6e3'];
let colorIndex = 0;
Object.keys(locations).forEach(loc => {
  const { lat, lng } = locations[loc];
  const marker = L.marker([lat, lng]).addTo(map).bindPopup(loc);
  marker._icon.style.backgroundColor = colors[colorIndex % colors.length];
  colorIndex++;
  markers[loc] = marker;
});
}

// Visualisasi rute sebagai polyline
function drawRoute(path) {
  if (routeLayer) map.removeLayer(routeLayer);
  if (!path) return;

  const latlngs = path.map(loc => [locations[loc].lat, locations[loc].lng]);
  routeLayer = L.polyline(latlngs, { color: 'green', weight: 4 }).addTo(map);
  map.fitBounds(routeLayer.getBounds());
}

export { initMap, drawRoute };