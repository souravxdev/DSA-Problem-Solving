# 2567. Minimum Score by Changing Two Elements

**Source:** [LeetCode 2567](https://leetcode.com/problems/minimum-score-by-changing-two-elements/) · **Topic:** Arrays · **Difficulty:** Medium

## Problem

An array's score is its largest gap between two values plus its smallest gap. You may change any two elements to any values; return the smallest score you can reach.

## Approach

**Pattern:** sort, then check the extremes (greedy)

**The key idea:** change the two elements to values that already exist in the array, and the smallest gap becomes `0`. So the score is just the largest gap (max − min) of what's left, and the best move is to "drop" two of the extreme values. There are only three ways to do that:

1. Sort the array.
2. Compare the range left after each option:
   - drop the two smallest → `nums[n-1] - nums[2]`
   - drop the two largest → `nums[n-3] - nums[0]`
   - drop one of each → `nums[n-2] - nums[1]`
3. Return the smallest of the three.

Two things worth remembering:

- `sort` changes the array **in place** and returns the **same** array, so `let sortedArray = nums.sort(...)` is a second name for `nums`, not a copy (the same lesson as `result = nums` in [Rotate Array](../0189-rotate-array)). The TypeScript version sorts `nums` directly to make that clear.
- `Math.min` takes any number of arguments: `Math.min(a, b, c)`.

Checked against a brute force (try every pair to drop) on 5,000 random arrays with no differences.

**Faster:** only the 3 smallest and 3 largest values matter, so one pass with six trackers (like [Third Maximum Number](../0414-third-maximum-number)) gives O(n) instead of sorting.

**Example:** `[1,4,7,8,5]` → sorted `[1,4,5,7,8]` → options `8-5=3`, `5-1=4`, `7-4=3` → `3`; `[1,4,3]` → `0`

## Complexity

- **Time:** O(n log n), the sort
- **Space:** O(1) extra (sorts in place; the engine's sort may use some memory internally)

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
