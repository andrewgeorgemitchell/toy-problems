/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const results = [];
  const matrixSize = matrix.length * matrix[0].length
  let x = 0, y = 0;
  while (results.length < matrixSize) {
    const currentVal = matrix[y][x]
    results.push(currentVal)
    // If on right edge move down
    if (matrix[y + 1]) {
      if (!matrix[y][x + 1] && matrix[y + 1][x])  {
        console.log('move down')
        matrix[y][x] = null;
        y += 1
      }   
    } else if (matrix[y - 1]) {
      if (!matrix[y][x - 1] && matrix[y - 1][x]) {
        // If on left edge move up
        console.log('move up')
        matrix[y][x] = null;
        y -= 1
      }
    } 
    if ((!matrix[y + 1]) && matrix[y][x - 1]) {
      // If on bottom edge move left
      console.log('move left')
      matrix[y][x] = null;
      x -= 1
    } else if (!matrix[y - 1] && matrix[y][x + 1]) {
      // If on top edge move right
      console.log('move right')
      matrix[y][x] = null;
      x += 1
    }
    // If surrounded by edges break
  }
  return results;
};

console.log(spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))
