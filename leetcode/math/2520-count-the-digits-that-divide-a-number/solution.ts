const BASE = 10;

export function countDigits(num: number): number {
  let remaining = num;
  let count = 0;
  while (remaining > 0) {
    const digit = remaining % BASE;
    if (num % digit === 0) {
      count++;
    }
    remaining = Math.floor(remaining / BASE);
  }
  return count;
}

console.log(countDigits(7)); // 1
console.log(countDigits(121)); // 2
console.log(countDigits(1248)); // 4
