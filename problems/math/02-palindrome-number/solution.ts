const BASE = 10;

export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let remaining = x;
  let reversed = 0;
  while (remaining > 0) {
    const lastDigit = remaining % BASE;
    reversed = reversed * BASE + lastDigit;
    remaining = Math.floor(remaining / BASE);
  }
  return reversed === x;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
