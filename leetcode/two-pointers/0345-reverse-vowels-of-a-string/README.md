# 345. Reverse Vowels of a String

**Source:** [LeetCode 345](https://leetcode.com/problems/reverse-vowels-of-a-string/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

Reverse the order of only the vowels in a string (`a e i o u`, upper or lower case) and leave every other character where it is.

## Approach

**Pattern:** two pointers from opposite ends that each skip consonants on their own (builds on [Reverse String](../0344-reverse-string))

1. JavaScript strings can't be changed, so `split("")` the string into an array of characters first.
2. Put `first` at the start and `last` at the end, and keep a string of all 10 vowels to check with `includes`.
3. While `first < last`:
   - `first` isn't on a vowel → move only `first`.
   - `last` isn't on a vowel → move only `last`.
   - Both are on vowels → swap them, then move both.
4. `join("")` the array back into a string and return it.

**The key idea:** unlike Reverse String, the vowels aren't at mirror positions, so the pointers can't move in step. Each pointer waits on a vowel until the other one reaches a vowel too.

What I fixed along the way:

- `s[i] = ...` on a string throws in strict mode, so I learnt `split` / `join`.
- The `||` chain missed `o`, `u` and every uppercase vowel; one `vowels.includes(ch)` check covers all of them.
- Moving the pointers only inside the `if` caused an infinite loop on a consonant; moving them on every pass turned it back into a mirror swap. The three branches fix both.
- Checking `first || last` swapped consonants; a swap needs vowels on **both** sides.

The TypeScript version uses a `Set` for O(1) lookups and destructuring for the swap.

**Example:** `"IceCreAm"` → `"AceCreIm"`; `"leetcode"` → `"leotcede"`

## Complexity

- **Time:** O(n), each pointer only moves inward
- **Space:** O(n), the character array (strings are immutable in JS)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
