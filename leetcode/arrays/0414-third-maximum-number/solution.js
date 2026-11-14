/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax && nums[i] !== firstMax) {
      thirdMax = secondMax;
      secondMax = nums[i];
    } else if (
      nums[i] > thirdMax &&
      nums[i] !== secondMax &&
      nums[i] !== firstMax
    ) {
      thirdMax = nums[i];
    }
  }
  return thirdMax === -Infinity ? firstMax : thirdMax;
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
