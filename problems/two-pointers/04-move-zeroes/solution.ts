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

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [ 1, 3, 12, 0, 0 ]

const single = [0];
moveZeroes(single);
console.log(single); // [ 0 ]
