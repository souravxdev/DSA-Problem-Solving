/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let original = x;
  let reverse = 0;

  x = Math.abs(x);

  while (x > 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit - 1) return 0;
  return original < 0 ? -reverse : reverse;
};

console.log(reverse(1563847412)); // 0
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
