function minimizeSum(nums) {
  let n = nums.length;
  let sortedArray = nums.sort((a, b) => a - b);

  let changeLowest = sortedArray[n - 1] - sortedArray[2];
  let changeHighest = sortedArray[n - 3] - sortedArray[0];
  let changeBoth = sortedArray[n - 2] - sortedArray[1];

  return Math.min(changeLowest, Math.min(changeHighest, changeBoth));
}

console.log(minimizeSum([1, 4, 7, 8, 5])); // 3
console.log(minimizeSum([1, 4, 3])); // 0
