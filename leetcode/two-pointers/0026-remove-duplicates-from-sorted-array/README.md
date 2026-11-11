# 26. Remove Duplicates from Sorted Array

**Source:** [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

In a sorted array, move one copy of each value to the front of the same array (no extra array), keeping their order, and return how many unique values there are. LeetCode's judge checks both the returned count and the front of the array.

## Approach

**Pattern:** two pointers, slow and fast (read/write) on the same array (same as my [practice version](../../../problems/two-pointers/01-remove-duplicates-from-sorted-array))

1. `x` (slow) marks the last unique value kept; it starts at `0` because the first element is always unique.
2. `i` (fast) scans every element. Because the array is sorted, a new value is always bigger than `nums[x]`.
3. When `nums[i] > nums[x]`, move `x` forward and write the new value there: `nums[x] = nums[i]`.
4. Return `x + 1`, the number of unique values.

Writing into the same array is what "in-place" means here: the judge reads `nums` back after the function returns, so the answer has to be in its first `k` slots.

**Example:** `[1, 1, 2]` → `2` (`[1, 2, _]`); `[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]` → `5` (`[0, 1, 2, 3, 4, _, …]`)

## Complexity

- **Time:** O(n), one pass
- **Space:** O(1), two index variables

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
