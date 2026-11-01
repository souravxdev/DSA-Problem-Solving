export function evenNumbers(nums: readonly number[]): number[] {
  return nums.filter((num) => num % 2 === 0);
}

const arr = [10, 3, 5, 2, 7, 6, 9];

evenNumbers(arr).forEach((num) => console.log(num)); // 10, 2, 6 (one per line)
