export function minimizeSum(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const dropTwoSmallest = nums[n - 1] - nums[2];
  const dropTwoLargest = nums[n - 3] - nums[0];
  const dropOneEach = nums[n - 2] - nums[1];

  return Math.min(dropTwoSmallest, dropTwoLargest, dropOneEach);
}

console.log(minimizeSum([1, 4, 7, 8, 5])); // 3
console.log(minimizeSum([1, 4, 3])); // 0
