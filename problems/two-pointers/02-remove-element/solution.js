function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // shift elements to left if it is not equal to val
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

const val = 2;
// const array = [3, 2, 1, 5, 3, 4, 8, 3];
const array = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(array, val)); // 5
