/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
  return s;
};

const example1 = ["h", "e", "l", "l", "o"];
reverseString(example1);
console.log(example1); // [ 'o', 'l', 'l', 'e', 'h' ]

const example2 = ["H", "a", "n", "n", "a", "h"];
reverseString(example2);
console.log(example2); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
