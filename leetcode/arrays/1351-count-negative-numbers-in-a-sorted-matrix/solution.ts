export function countNegatives(grid: number[][]): number {
  let count = 0;
  for (const row of grid) {
    for (const value of row) {
      if (value < 0) {
        count++;
      }
    }
  }
  return count;
}

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
console.log(
  countNegatives([
    [5, 1, 0],
    [-5, -5, -5],
  ]),
); // 3
