# 189. Rotate Array

**Source:** [LeetCode 189](https://leetcode.com/problems/rotate-array/) · **Topic:** Arrays · **Difficulty:** Medium

## Problem

Shift every element of an array `k` places to the right, wrapping the ones that fall off the end around to the front. Change the array in place; `k` can be larger than the array.

## Approach

**Pattern:** copy + index mapping with `%` (wrap-around)

1. Make a **separate copy** of the array: `result = nums.slice()`.
2. For each index `i`, the value `nums[i]` belongs at `(i + k) % n`. Write it there in `result`. The `%` wraps indexes past the end back to the start, and also handles `k > n` (rotating by `n` changes nothing).
3. Copy `result` back into `nums`, because the problem wants `nums` itself changed and nothing returned.

**The key idea:** the copy is needed because writing straight into `nums` overwrites values before they've been read.

What I fixed along the way:

- `let result = nums;` doesn't copy an array. It makes a second name for the **same** array, so writing to `result` overwrote `nums` mid-loop and gave `[2,3,1,1,2,3,1]`. `nums.slice()` makes a real copy.
- `slice(0, nums.length - 1)` copied one element too few, because `slice`'s end index isn't included. It still worked (the loop fills every index and JS arrays grow), but `slice()` copies everything.

**Follow-up:** LeetCode asks for O(1) extra space. Reverse the whole array, then reverse the first `k` and the last `n - k` separately (three [Reverse String](../../two-pointers/0344-reverse-string)-style reversals).

**Example:** `[1,2,3,4,5,6,7]`, k = 3 → `[5,6,7,1,2,3,4]`; `[-1,-100,3,99]`, k = 2 → `[3,99,-1,-100]`

## Complexity

- **Time:** O(n), two passes
- **Space:** O(n), the copy

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
