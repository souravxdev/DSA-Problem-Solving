/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

const example1 = ["h", "e", "l", "l", "o"];
reverseString(example1);
console.log(example1); // [ 'o', 'l', 'l', 'e', 'h' ]

const example2 = ["H", "a", "n", "n", "a", "h"];
reverseString(example2);
console.log(example2); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
