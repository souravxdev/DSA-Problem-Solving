const arr = [-1, 0, -3, 44, -55, -90, 121];

function countNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegativeNumber(arr)); // 4
