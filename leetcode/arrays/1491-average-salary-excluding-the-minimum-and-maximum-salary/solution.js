/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let highest = -Infinity;
  let lowest = +Infinity;
  let sum = 0,
    i;

  for (i = 0; i < salary.length; i++) {
    if (salary[i] > highest) {
      highest = salary[i];
    }
    if (salary[i] < lowest) {
      lowest = salary[i];
    }
    sum += salary[i];
  }
  sum = sum - (highest + lowest);
  return sum / (salary.length - 2);
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary)); // 2500
console.log(average([1000, 2000, 3000])); // 2000
