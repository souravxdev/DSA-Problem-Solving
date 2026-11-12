# 2520. Count the Digits That Divide a Number

**Source:** [LeetCode 2520](https://leetcode.com/problems/count-the-digits-that-divide-a-number/) · **Topic:** Math · **Difficulty:** Easy

## Problem

Given a positive integer with no zero digits, count how many of its digits divide the whole number evenly. A digit that appears more than once is counted each time.

## Approach

**Pattern:** digit extraction with `% 10` and `/ 10`

1. Keep the original number and walk a copy of it digit by digit.
2. Take the last digit with `% 10`. If the original number is divisible by it, add one to the count.
3. Drop the last digit with `Math.floor(n / 10)` (JavaScript has no integer division, unlike Java) and repeat until nothing is left.

No divide-by-zero check is needed, because the input never contains a `0` digit.

Solved first in Java on 2026-08-22, before this repo existed; `solution.js` is that solution converted to JavaScript.

**Example:** `7` → `1`; `121` → `2`; `1248` → `4`

## Complexity

- **Time:** O(d), one step per digit
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
