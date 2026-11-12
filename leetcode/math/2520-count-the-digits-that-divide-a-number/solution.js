/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let n = num,
    digit,
    count = 0;
  while (n > 0) {
    digit = n % 10;
    if (num % digit == 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
};

console.log(countDigits(7)); // 1
console.log(countDigits(121)); // 2
console.log(countDigits(1248)); // 4
