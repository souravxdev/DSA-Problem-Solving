/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let highestCandies = -Infinity;
  let results = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > highestCandies) {
      highestCandies = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    results.push(candies[i] + extraCandies >= highestCandies);
  }
  return results;
};
const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // [ true, true, true, false, true ]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [ true, false, false, false, false ]
console.log(kidsWithCandies([12, 1, 12], 10)); // [ true, false, true ]
