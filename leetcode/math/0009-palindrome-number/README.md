# 9. Palindrome Number

**Source:** [LeetCode 9](https://leetcode.com/problems/palindrome-number/) · **Topic:** Math · **Difficulty:** Easy

## Problem

Decide whether a 32-bit integer reads the same forwards and backwards. Negative numbers never do, because of the minus sign.

## Approach

**Pattern:** reverse a number digit by digit, no string conversion (same as my [palindrome number practice](../../../problems/math/02-palindrome-number))

1. Keep a copy of the original and start `reverse` at `0`.
2. While the number is greater than `0`: take the last digit with `% 10`, append it with `reverse * 10 + lastDigit`, and drop it with `Math.floor(x / 10)`.
3. Return whether `reverse` equals the original. Negative numbers never enter the loop, so `reverse` stays `0` and they come out `false`.

This answers LeetCode's follow-up (solve it without converting to a string).

No overflow check is needed, unlike [reverse integer](../../../problems/math/03-reverse-integer): if the reversed number is too big for 32 bits, it simply won't equal the original.

**The bug on the first attempt:** `x = x / 10` without `Math.floor`, the same one I'd fixed in practice that morning. It passed two of LeetCode's three examples only because their answer was `false`.

**Example:** `121` → `true`; `-121` → `false`; `10` → `false`

## Complexity

- **Time:** O(d), one step per digit (at most 10 for a 32-bit number)
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
