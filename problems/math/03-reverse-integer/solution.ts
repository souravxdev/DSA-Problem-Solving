const BASE = 10;
const INT32_MIN = -(2 ** 31); // -2147483648
const INT32_MAX = 2 ** 31 - 1; //  2147483647

export function reverse(x: number): number {
  let remaining = Math.abs(x);
  let reversed = 0;
  while (remaining > 0) {
    reversed = reversed * BASE + (remaining % BASE);
    remaining = Math.floor(remaining / BASE);
  }

  const signed = x < 0 ? -reversed : reversed;
  if (signed < INT32_MIN || signed > INT32_MAX) {
    return 0;
  }
  return signed;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0
