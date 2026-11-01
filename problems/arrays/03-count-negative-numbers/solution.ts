export function countNegativeNumber(nums: readonly number[]): number {
  let count = 0;
  for (const num of nums) {
    if (num < 0) {
      count++;
    }
  }
  return count;
}

const arr = [2, -6, 4, 8, 1, -9];

console.log(countNegativeNumber(arr)); // 2
