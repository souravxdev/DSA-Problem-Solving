export function maxProduct(nums: number[]): number {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }
  return (firstLargest - 1) * (secondLargest - 1);
}

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
