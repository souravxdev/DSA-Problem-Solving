function reverse(num) {
  let original = num;
  num = Math.abs(num);

  let reverese = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverese = reverese * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverese < -limit || reverese > limit - 1) return 0;

  return original < 0 ? -reverese : reverese;
}

console.log(reverse(12345679756565)); // 0
