/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let original = x;
  let reverse = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return original == reverse;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
