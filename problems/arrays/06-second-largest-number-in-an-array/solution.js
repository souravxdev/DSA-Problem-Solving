function secondLargest(nums) {
  if (nums.length < 2) {
    return "Array should have at least two numbers";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== firstLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest === -Infinity
    ? "No second largest found"
    : secondLargest;
}

const arr = [0, 3, 5, 5, 2, 7, 9];

console.log(secondLargest(arr)); // 7
