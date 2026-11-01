export function largestNumber(nums: readonly number[]): number {
  let largest = Number.NEGATIVE_INFINITY;
  for (const num of nums) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

const arr = [2, -6, 4, 8, 1, -9];

console.log(largestNumber(arr)); // 8
