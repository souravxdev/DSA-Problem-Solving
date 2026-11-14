/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largest = -Infinity;
  let largestIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      largestIndex = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === largestIndex) {
      continue;
    }
    if (largest < 2 * nums[i]) {
      return -1;
    }
  }
  return largestIndex;
};

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
