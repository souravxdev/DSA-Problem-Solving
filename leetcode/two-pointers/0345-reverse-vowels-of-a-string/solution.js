/**
 * @param {string} s
 * @return {string}
 */
const vowels = "aeiouAEIOU";
var reverseVowels = function (s) {
  let first = 0;
  let last = s.length - 1;
  let word = s.split("");

  while (first < last) {
    if (!vowels.includes(word[first])) {
      first++;
    } else if (!vowels.includes(word[last])) {
      last--;
    } else {
      let temp = word[first];
      word[first] = word[last];
      word[last] = temp;
      first++;
      last--;
    }
  }
  return word.join("");
};

const s = "IceCreAm";
console.log(reverseVowels(s)); // AceCreIm
console.log(reverseVowels("leetcode")); // leotcede
