const NOT_DOMINANT = -1;
const FACTOR = 2;

export function dominantIndex(nums: number[]): number {
  let largestIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[largestIndex]) {
      largestIndex = i;
    }
  }

  const largest = nums[largestIndex];
  for (let i = 0; i < nums.length; i++) {
    if (i !== largestIndex && largest < FACTOR * nums[i]) {
      return NOT_DOMINANT;
    }
  }
  return largestIndex;
}

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
