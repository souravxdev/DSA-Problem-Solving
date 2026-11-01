function smallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const arr = [1, 3, 44, -55, 6, 200];

console.log(smallestNumber(arr)); // -55
