# 1491. Average Salary Excluding the Minimum and Maximum Salary

**Source:** [LeetCode 1491](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/) · **Topic:** Arrays · **Difficulty:** Easy

## Problem

Given a list of distinct salaries, find the average after leaving out the single highest and the single lowest salary.

## Approach

**Pattern:** running max and min in one pass + total, then adjust after the loop (combines my [largest](../../../problems/arrays/04-largest-number-in-an-array) and [smallest](../../../problems/arrays/05-smallest-number-in-an-array) number practice)

1. Start `highest` at `-Infinity`, `lowest` at `+Infinity` and `sum` at `0`.
2. In one loop, update `highest` and `lowest` and add **every** salary to `sum`.
3. After the loop, subtract `highest + lowest` from `sum`.
4. Divide by `salary.length - 2`, the number of salaries left.

**The key idea:** during the loop, `highest` is only the highest *so far*, not the real maximum. My first attempts tried to skip the max and min inside the loop, so values were skipped or kept depending on what came earlier: in `[1000, 2000, 3000]`, 2000 looked like the maximum until 3000 arrived. Only after the loop are the real max and min known, so remove them then.

Other things I fixed along the way:

- The loop started at `i = 1`, so the first salary was never looked at.
- `x !== highest || x !== lowest` is always `true` for distinct values, so it filtered nothing.
- `highest.length` on a number is `undefined`, which made the result `NaN`; the count to remove is simply `2`.

The TypeScript version names that `2` as `EXCLUDED_COUNT`.

**Example:** `[4000, 3000, 1000, 2000]` → `2500`; `[1000, 2000, 3000]` → `2000`

## Complexity

- **Time:** O(n), one pass
- **Space:** O(1)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
