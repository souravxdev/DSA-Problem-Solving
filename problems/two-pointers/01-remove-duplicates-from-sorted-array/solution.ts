// Moves each unique value to the front of `nums` (in place) and returns how many there are.
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

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

const dryRun = [1, 1, 2, 3, 3, 5];
const k3 = removeDuplicates(dryRun);
console.log(k3, dryRun.slice(0, k3)); // 4 [ 1, 2, 3, 5 ]
