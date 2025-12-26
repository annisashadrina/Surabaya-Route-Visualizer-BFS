// Data node berbasis lokasi nyata Surabaya (nama, lat, lng)
// Graf unweighted: adjacency list berdasarkan koneksi logis (berdekatan secara geografis, seperti jalan utama)
const locations = {
  "Tunjungan": { lat: -7.2636, lng: 112.7425 },
  "Darmo": { lat: -7.2892, lng: 112.7381 },
  "Diponegoro": { lat: -7.2895, lng: 112.7385 },
  "Wonokromo": { lat: -7.3105, lng: 112.7395 },
  "Margorejo": { lat: -7.3200, lng: 112.7400 },
  "Benowo": { lat: -7.2400, lng: 112.6500 },  // Surabaya Barat
  "Rungkut": { lat: -7.3100, lng: 112.7800 }  // Surabaya Timur
};

const graph = {
  "Tunjungan": ["Darmo", "Benowo"],  // Tambah koneksi ke Benowo (barat)
  "Darmo": ["Tunjungan", "Diponegoro"],
  "Diponegoro": ["Darmo", "Wonokromo"],
  "Wonokromo": ["Diponegoro", "Margorejo"],
  "Margorejo": ["Wonokromo", "Rungkut"],  // Tambah koneksi ke Rungkut (timur)
  "Benowo": ["Tunjungan"],  // Koneksi balik ke Tunjungan
  "Rungkut": ["Margorejo"]  // Koneksi balik ke Margorejo
};

export { locations, graph };