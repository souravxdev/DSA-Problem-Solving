function isPalindrom(num) {
  if (num < 0) {
    return false;
  }
  let original = num;
  let reverese = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverese = reverese * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return original == reverese;
}

console.log(isPalindrom(-1221)); // false
