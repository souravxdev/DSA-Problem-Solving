/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

const example1 = [3, 2, 2, 3];
const k1 = removeElement(example1, 3);
console.log(k1, example1.slice(0, k1)); // 2 [ 2, 2 ]

const example2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(example2, 2);
console.log(k2, example2.slice(0, k2)); // 5 [ 0, 1, 3, 0, 4 ]
