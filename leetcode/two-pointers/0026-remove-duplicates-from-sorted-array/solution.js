/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

const example1 = [1, 1, 2];
const k1 = removeDuplicates(example1);
console.log(k1, example1.slice(0, k1)); // 2 [ 1, 2 ]

const example2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(example2);
console.log(k2, example2.slice(0, k2)); // 5 [ 0, 1, 2, 3, 4 ]
