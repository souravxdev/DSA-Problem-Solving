/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return (firstLargest - 1) * (secondLargest - 1);
};

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
