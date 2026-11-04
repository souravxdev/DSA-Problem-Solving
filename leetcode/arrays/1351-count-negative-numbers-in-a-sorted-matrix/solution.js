/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(
  countNegatives([
    [5, 1, 0],
    [-5, -5, -5],
  ]),
); // 3

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
); // 8
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ]),
); // 0
