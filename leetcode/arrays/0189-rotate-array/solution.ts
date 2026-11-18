/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const result = nums.slice();
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }
}

const example1 = [1, 2, 3, 4, 5, 6, 7];
rotate(example1, 3);
console.log(example1); // [ 5, 6, 7, 1, 2, 3, 4 ] (Node prints it over 3 lines)

const example2 = [-1, -100, 3, 99];
rotate(example2, 2);
console.log(example2); // [ 3, 99, -1, -100 ]
