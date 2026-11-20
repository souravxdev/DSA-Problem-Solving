/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const example1 = [0, 1, 0, 3, 12];
moveZeroes(example1);
console.log(example1); // [ 1, 3, 12, 0, 0 ]

const example2 = [0];
moveZeroes(example2);
console.log(example2); // [ 0 ]
