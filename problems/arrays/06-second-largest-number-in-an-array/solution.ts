const MIN_LENGTH = 2;
const TOO_SHORT = "Array should have at least two numbers";
const NOT_FOUND = "No second largest found";

type SecondLargestResult = number | typeof TOO_SHORT | typeof NOT_FOUND;

export function secondLargest(nums: readonly number[]): SecondLargestResult {
  if (nums.length < MIN_LENGTH) {
    return TOO_SHORT;
  }
  let firstLargest = -Infinity;
  let second = -Infinity;
  for (const num of nums) {
    if (num > firstLargest) {
      second = firstLargest;
      firstLargest = num;
    } else if (num > second && num !== firstLargest) {
      second = num;
    }
  }
  return second === -Infinity ? NOT_FOUND : second;
}

console.log(secondLargest([0, 3, 5, 2, 7, 9])); // 7
console.log(secondLargest([4, 4, 4])); // No second largest found
console.log(secondLargest([5])); // Array should have at least two numbers
console.log(secondLargest([10, 20])); // 10
