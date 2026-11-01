export function smallestNumber(nums: readonly number[]): number {
  let smallest = Number.POSITIVE_INFINITY;
  for (const num of nums) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}

const arr = [2, -6, 4, 8, 1, -9];

console.log(smallestNumber(arr)); // -9
