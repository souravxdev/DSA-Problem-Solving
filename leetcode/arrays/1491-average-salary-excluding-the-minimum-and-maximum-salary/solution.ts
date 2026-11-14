const EXCLUDED_COUNT = 2; // the minimum and the maximum

export function average(salary: number[]): number {
  let highest = -Infinity;
  let lowest = Infinity;
  let sum = 0;

  for (const pay of salary) {
    highest = Math.max(highest, pay);
    lowest = Math.min(lowest, pay);
    sum += pay;
  }
  return (sum - highest - lowest) / (salary.length - EXCLUDED_COUNT);
}

console.log(average([4000, 3000, 1000, 2000])); // 2500
console.log(average([1000, 2000, 3000])); // 2000
