// Moves every value that isn't `val` to the front of `nums` (in place) and returns how many there are.
export function removeElement(nums: number[], val: number): number {
  let write = 0; // slow pointer: where the next kept value goes
  for (let read = 0; read < nums.length; read++) {
    // fast pointer: scans every element
    if (nums[read] !== val) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

const example1 = [3, 2, 2, 3];
const k1 = removeElement(example1, 3);
console.log(k1, example1.slice(0, k1)); // 2 [ 2, 2 ]

const example2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(example2, 2);
console.log(k2, example2.slice(0, k2)); // 5 [ 0, 1, 3, 0, 4 ]
