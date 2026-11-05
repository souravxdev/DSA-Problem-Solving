const BASE = 10;

export function countDigits(n: number): number {
  let remaining = Math.abs(n);
  if (remaining === 0) {
    return 1;
  }

  let count = 0;
  while (remaining > 0) {
    remaining = Math.floor(remaining / BASE);
    count++;
  }
  return count;
}

console.log(countDigits(259)); // 3
console.log(countDigits(-1035)); // 4
console.log(countDigits(0)); // 1
