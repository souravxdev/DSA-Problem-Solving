function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const steps = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, steps - 1);
  reverse(nums, steps, n - 1);
}

const example1 = [1, 2, 3, 4, 5, 6, 7];
rotate(example1, 3);
console.log(example1); // [ 5, 6, 7, 1, 2, 3, 4 ] (Node prints it over 3 lines)

const example2 = [-1, -100, 3, 99];
rotate(example2, 2);
console.log(example2); // [ 3, 99, -1, -100 ]

const fullTurn = [1, 2, 3];
rotate(fullTurn, 3);
console.log(fullTurn); // [ 1, 2, 3 ]
