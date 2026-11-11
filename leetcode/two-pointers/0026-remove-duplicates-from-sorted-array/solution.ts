export function removeDuplicates(nums: number[]): number {
  let lastUnique = 0; // slow pointer: index of the last unique value kept
  for (let i = 1; i < nums.length; i++) {
    // fast pointer: scans ahead
    if (nums[i] !== nums[lastUnique]) {
      lastUnique++;
      nums[lastUnique] = nums[i];
    }
  }
  return lastUnique + 1;
}

const example1 = [1, 1, 2];
const k1 = removeDuplicates(example1);
console.log(k1, example1.slice(0, k1)); // 2 [ 1, 2 ]

const example2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(example2);
console.log(k2, example2.slice(0, k2)); // 5 [ 0, 1, 2, 3, 4 ]
