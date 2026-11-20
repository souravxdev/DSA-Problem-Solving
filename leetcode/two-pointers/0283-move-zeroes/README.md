# 283. Move Zeroes

**Source:** [LeetCode 283](https://leetcode.com/problems/move-zeroes/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

Push every `0` in an array to the end while the non-zero values keep their original order. Change the array in place, without making a copy.

## Approach

**Pattern:** read/write pointers (the same as [Remove Element](../0027-remove-element), with `0` as the value to remove)

1. `x` is the **write** pointer, the next slot for a non-zero value; it starts at `0`.
2. `i` **reads** every element. Each non-zero value is copied to `nums[x]` and `x` moves on; zeros are skipped.
3. After the loop the first `x` slots hold the non-zeros in order, so fill the rest with `0`.

`x` never passes `i`, so every value is read before its slot can be overwritten.

Solved first as [practice](../../../problems/two-pointers/04-move-zeroes); accepted on the first submission.

**Example:** `[0,1,0,3,12]` → `[1,3,12,0,0]`; `[0]` → `[0]`

## Complexity

- **Time:** O(n), one pass to shift and one to fill
- **Space:** O(1), in place

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
