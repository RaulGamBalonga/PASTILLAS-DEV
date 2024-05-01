// Create a function named trackCreature that receives an array of strings representing the recorded movements of the creature, and an array of strings representing the map of the lake. The function will track the creature's path based on its movements and determine if it has visited all the unique locations in the lake. The creature's movements are represented by cardinal directions: "N" (North), "S" (South), "E" (East), and "W" (West). The map of the lake is represented by an array of strings, where each string represents a row in the map. The map will contain the following characters:

// "." represents water
// "#" represents land
// "S" represents the creature's starting position
// The function should return an object with the following properties:

// "visited_locations": an integer representing the number of unique water locations visited by the creature
// "total_locations": an integer representing the total number of water locations in the lake
// "path": a string representing the creature's path, where each character represents the creature's position after each movement ("." for water, "#" for land)
// Note:

// The creature can only move to water locations (".") and cannot move onto land ("#").
// If the creature moves outside the map boundaries, it will reappear on the opposite side of the map (i.e., moving off the top will make it reappear at the bottom, moving off the right will make it reappear on the left).
// The creature's starting position counts as a visited location.

function trackCreature(movements, map) {
  const rows = map.length;
  const cols = map[0].length;
  
  let startRow = -1;
  let startCol = -1;
  
  // Find the starting position 'S'
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 'S') {
        startRow = i;
        startCol = j;
        break;
      }
    }
    if (startRow !== -1) {
      break;
    }
  }
  
  const visited = new Set();
  let currentRow = startRow;
  let currentCol = startCol;
  let path = '';
  
  // Track the creature's movements
  for (const movement of movements) {
    switch (movement) {
      case 'N':
        currentRow = (currentRow - 1 + rows) % rows;
        break;
      case 'S':
        currentRow = (currentRow + 1) % rows;
        break;
      case 'E':
        currentCol = (currentCol + 1) % cols;
        break;
      case 'W':
        currentCol = (currentCol - 1 + cols) % cols;
        break;
    }
    
    const currentLocation = map[currentRow][currentCol];
    
    if (currentLocation === '.') {
      visited.add(`${currentRow},${currentCol}`);
    }
    
    path += currentLocation;
  }
  
  let totalLocations = 0;
  
  // Count the total water locations
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === '.') {
        totalLocations++;
      }
    }
  }
  
  return {
    visited_locations: visited.size,
    total_locations: totalLocations,
    path: path
  };
}