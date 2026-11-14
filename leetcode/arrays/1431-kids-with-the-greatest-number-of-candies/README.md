# 1431. Kids With the Greatest Number of Candies

**Source:** [LeetCode 1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Each kid has some candies. For every kid, decide whether handing them all the extra candies would give them at least as many as anyone else, and return one `true`/`false` per kid.

## Approach

**Pattern:** running max, then a second pass that compares each item with it (first loop is my [largest number](../../../problems/arrays/04-largest-number-in-an-array) practice)

1. First pass: find the highest candy count.
2. Second pass: for each kid, push `candies[i] + extraCandies >= highest` into a `results` array.
3. Return `results` after the loop.

What I fixed along the way:

- **`return true` inside the loop** stopped at the first matching kid and gave back one value instead of an array. Collect an answer per kid and return once, after the loop (the same lesson as [1491](../1491-average-salary-excluding-the-minimum-and-maximum-salary)).
- **`>` instead of `>=`.** Ties count: several kids can share the greatest amount, so equal to the max is `true`.
- **Changing the input.** `candies[i] = candies[i] + extraCandies` overwrote the caller's array. Adding inside the comparison gives the same answer and leaves `candies` untouched.

The TypeScript version uses `Math.max(...candies)` for the first pass and `map` for the second, which returns the new array directly.

**Example:** `[2, 3, 5, 1, 3]`, `3` → `[true, true, true, false, true]`; `[12, 1, 12]`, `10` → `[true, false, true]`

## Complexity

- **Time:** O(n), two passes
- **Space:** O(n) for the result array (O(1) extra besides it)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
