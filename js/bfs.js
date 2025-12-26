import { graph } from './graph.js';

// BFS Iteratif: Menggunakan queue, O(V + E)
function bfsIterative(start, end) {
  if (!graph[start] || !graph[end]) return null;
  const queue = [{ node: start, path: [start] }];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const { node, path } = queue.shift();
    if (node === end) return path;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ node: neighbor, path: [...path, neighbor] });
      }
    }
  }
  return null; // No path
}

// BFS Rekursif: Simulasi queue via parameter, akademik untuk perbandingan
function bfsRecursive(queue, visited, end) {
  if (queue.length === 0) return null;
  const { node, path } = queue.shift();
  if (node === end) return path;
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push({ node: neighbor, path: [...path, neighbor] });
    }
  }
  return bfsRecursive(queue, visited, end);
}

function bfsRecursiveWrapper(start, end) {
  if (!graph[start] || !graph[end]) return null;
  const visited = new Set([start]);
  return bfsRecursive([{ node: start, path: [start] }], visited, end);
}

export { bfsIterative, bfsRecursiveWrapper as bfsRecursive };