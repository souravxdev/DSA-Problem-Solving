/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let write = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[write] = num;
      write++;
    }
  }
  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const example1 = [0, 1, 0, 3, 12];
moveZeroes(example1);
console.log(example1); // [ 1, 3, 12, 0, 0 ]

const example2 = [0];
moveZeroes(example2);
console.log(example2); // [ 0 ]
