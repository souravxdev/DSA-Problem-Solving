function largestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr = [1, 3, 44, -55, 6, 200];

console.log(largestNumber(arr)); // 200
