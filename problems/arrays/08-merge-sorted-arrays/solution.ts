export function mergeSortedArrays(nums1: number[], m: number, nums2: readonly number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}

const example1 = [1, 2, 3, 0, 0, 0];
mergeSortedArrays(example1, 3, [2, 5, 6], 3);
console.log(example1); // [ 1, 2, 2, 3, 5, 6 ]

const example2 = [1];
mergeSortedArrays(example2, 1, [], 0);
console.log(example2); // [ 1 ]

const example3 = [0];
mergeSortedArrays(example3, 0, [1], 1);
console.log(example3); // [ 1 ]
