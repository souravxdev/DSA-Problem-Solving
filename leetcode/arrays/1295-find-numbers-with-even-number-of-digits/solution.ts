const BASE = 10;

function countDigits(n: number): number {
  let remaining = n;
  let count = 0;
  while (remaining > 0) {
    remaining = Math.floor(remaining / BASE);
    count++;
  }
  return count;
}

export function findNumbers(nums: number[]): number {
  let evenDigitNumbers = 0;
  for (const num of nums) {
    if (countDigits(num) % 2 === 0) {
      evenDigitNumbers++;
    }
  }
  return evenDigitNumbers;
}

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1
