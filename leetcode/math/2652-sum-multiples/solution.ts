const DIVISORS = [3, 5, 7] as const;

export function sumOfMultiples(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (DIVISORS.some((divisor) => i % divisor === 0)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfMultiples(7)); // 21
console.log(sumOfMultiples(10)); // 40
console.log(sumOfMultiples(9)); // 30
