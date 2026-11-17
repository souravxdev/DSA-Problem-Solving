export function mergeSortedArrays(nums1: number[], m: number, nums2: readonly number[], n: number): void {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    const nums2Done = p2 >= n;
    const takeFromNums1 = nums2Done || (p1 < m && nums1Copy[p1] < nums2[p2]);
    if (takeFromNums1) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
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
