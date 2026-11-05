function countDigits(number) {
  let count = 0;
  number = Math.abs(number);

  if (number == 0) {
    count = 1;
  }

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

console.log("Digits of given number: " + countDigits(-98776)); // Digits of given number: 5
