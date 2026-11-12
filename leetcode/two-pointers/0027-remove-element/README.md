# 27. Remove Element

**Source:** [LeetCode 27](https://leetcode.com/problems/remove-element/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

Remove every copy of a given value from an array in place, moving the remaining values to the front, and return how many are left. Their order doesn't matter: LeetCode's judge sorts the first `k` values before comparing.

## Approach

**Pattern:** two pointers, slow and fast (read/write) on the same array (same as my [practice version](../../../problems/two-pointers/02-remove-element))

1. `x` (slow) is where the next value to keep goes; it starts at `0`.
2. `i` (fast) scans every element.
3. If `nums[i] !== val`, copy it to `nums[x]` and move `x` forward; otherwise skip it.
4. Return `x`, the number of values kept.

Unlike [26. Remove Duplicates](../0026-remove-duplicates-from-sorted-array), the array doesn't need to be sorted, and `x` points at the *next* free slot rather than the last kept value, so it returns `x` instead of `x + 1`.

**Example:** `[3, 2, 2, 3]`, `val = 3` → `2` (`[2, 2, _, _]`); `[0, 1, 2, 2, 3, 0, 4, 2]`, `val = 2` → `5` (`[0, 1, 3, 0, 4, _, _, _]`)

## Complexity

- **Time:** O(n), one pass
- **Space:** O(1), two index variables

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
