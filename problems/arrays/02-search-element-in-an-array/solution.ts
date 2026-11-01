const NOT_FOUND = -1;

export function searchElement(nums: readonly number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return NOT_FOUND;
}

const arr = [4, 2, 0, 10, 8, 30];

console.log(searchElement(arr, 30)); // 5
