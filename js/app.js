import { locations, graph } from './graph.js';
import { bfsIterative, bfsRecursive } from './bfs.js';
import { initMap, drawRoute } from './map.js';

// Inisialisasi saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initMap();

  // Populate dropdown start/destination
  const startSelect = document.getElementById('start-location');
  const destSelect = document.getElementById('destination');
  Object.keys(locations).forEach(loc => {
    const option = document.createElement('option');
    option.value = loc;
    option.textContent = loc;
    startSelect.appendChild(option.cloneNode(true));
    destSelect.appendChild(option);
  });

  // Event listener untuk tombol Generate Route
  document.getElementById('generate-route').addEventListener('click', () => {
    const start = startSelect.value;
    const dest = destSelect.value;
    const algorithm = document.getElementById('algorithm').value;

    if (!start || !dest || start === dest) {
      alert('Pilih start dan destination yang berbeda!');
      return;
    }

    let path;
    if (algorithm === 'iterative') {
      path = bfsIterative(start, dest);
    } else {
      path = bfsRecursive(start, dest);
    }

    // Output rute
    const routeOutput = document.getElementById('route-output');
    if (path) {
      routeOutput.textContent = `Rute: ${path.join(' → ')}`;
    } else {
      routeOutput.textContent = 'No route found';
    }

    // Visualisasi di peta
    drawRoute(path);
  });
});