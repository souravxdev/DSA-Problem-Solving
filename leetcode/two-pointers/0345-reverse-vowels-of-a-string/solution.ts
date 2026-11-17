const VOWELS: ReadonlySet<string> = new Set("aeiouAEIOU");

export function reverseVowels(s: string): string {
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    if (!VOWELS.has(chars[left])) {
      left++;
    } else if (!VOWELS.has(chars[right])) {
      right--;
    } else {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  return chars.join("");
}

console.log(reverseVowels("IceCreAm")); // AceCreIm
console.log(reverseVowels("leetcode")); // leotcede
