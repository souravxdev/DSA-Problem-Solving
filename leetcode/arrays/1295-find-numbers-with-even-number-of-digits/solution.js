/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let numOfEvenNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let count = 0;

    while (number > 0) {
      number = Math.floor(number / 10);
      count++;
    }
    if (count % 2 == 0) {
      numOfEvenNumber++;
    }
  }

  return numOfEvenNumber;
};

console.log(findNumbers([12, 345, 2, 6, 7896, 33, 66])); // 4
console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1
