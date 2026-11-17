/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0 && p2 >= 0; i--) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}

const example1 = [1, 2, 3, 0, 0, 0];
merge(example1, 3, [2, 5, 6], 3);
console.log(example1); // [ 1, 2, 2, 3, 5, 6 ]

const example2 = [1];
merge(example2, 1, [], 0);
console.log(example2); // [ 1 ]

const example3 = [0];
merge(example3, 0, [1], 1);
console.log(example3); // [ 1 ]
