export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const result: number[] = [];
  for (const current of nums) {
    let count = 0;
    for (const other of nums) {
      if (other < current) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [ 4, 0, 1, 1, 3 ]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [ 2, 1, 0, 3 ]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [ 0, 0, 0, 0 ]
