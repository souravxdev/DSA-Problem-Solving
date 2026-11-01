let arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement(arr, 30)); // 5
