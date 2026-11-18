function rotate(nums, k) {
  let result = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    result[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
rotate(nums, k);
console.log(nums); // [ 5, 6, 7, 1, 2, 3, 4 ] (Node prints it over 3 lines)

const example2 = [-1, -100, 3, 99];
rotate(example2, 2);
console.log(example2); // [ 3, 99, -1, -100 ]
