const NOT_FOUND = -Infinity;

export function thirdMax(nums: number[]): number {
  let first = NOT_FOUND;
  let second = NOT_FOUND;
  let third = NOT_FOUND;

  for (const num of nums) {
    if (num === first || num === second) {
      continue; // distinct values only
    }
    if (num > first) {
      [third, second, first] = [second, first, num];
    } else if (num > second) {
      [third, second] = [second, num];
    } else if (num > third) {
      third = num;
    }
  }
  return third === NOT_FOUND ? first : third;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
