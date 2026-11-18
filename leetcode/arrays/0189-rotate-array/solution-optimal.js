function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
}

function rotate(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 7;
rotate(nums, k);
console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7 ] (k = length, so unchanged; Node prints it over 3 lines)

const example1 = [1, 2, 3, 4, 5, 6, 7];
rotate(example1, 3);
console.log(example1); // [ 5, 6, 7, 1, 2, 3, 4 ] (Node prints it over 3 lines)

const example2 = [-1, -100, 3, 99];
rotate(example2, 2);
console.log(example2); // [ 3, 99, -1, -100 ]
