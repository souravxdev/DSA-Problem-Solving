export function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10)); // 10
console.log(sum()); // 0
console.log(sum(5, -5, 10, 20)); // 30
console.log(sum(100, 200, 300, 400)); // 1000
