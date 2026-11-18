# 189. Rotate Array

**Source:** [LeetCode 189](https://leetcode.com/problems/rotate-array/) · **Topic:** Arrays · **Difficulty:** Medium

## Problem

Shift every element of an array `k` places to the right, wrapping the ones that fall off the end around to the front. Change the array in place; `k` can be larger than the array.

## Approach 1: copy + index mapping ([solution.ts](solution.ts) · [solution.js](solution.js))

**Pattern:** copy + index mapping with `%` (wrap-around)

1. Make a **separate copy** of the array: `result = nums.slice()`.
2. For each index `i`, the value `nums[i]` belongs at `(i + k) % n`. Write it there in `result`. The `%` wraps indexes past the end back to the start, and also handles `k > n` (rotating by `n` changes nothing).
3. Copy `result` back into `nums`, because the problem wants `nums` itself changed and nothing returned.

**The key idea:** the copy is needed because writing straight into `nums` overwrites values before they've been read.

What I fixed along the way:

- `let result = nums;` doesn't copy an array. It makes a second name for the **same** array, so writing to `result` overwrote `nums` mid-loop and gave `[2,3,1,1,2,3,1]`. `nums.slice()` makes a real copy.
- `slice(0, nums.length - 1)` copied one element too few, because `slice`'s end index isn't included. It still worked (the loop fills every index and JS arrays grow), but `slice()` copies everything.

## Approach 2: three reversals, O(1) space ([solution-optimal.ts](solution-optimal.ts) · [solution-optimal.js](solution-optimal.js))

**Pattern:** two pointers, reverse in place (my [Reverse String](../../two-pointers/0344-reverse-string) code as a `reverse(nums, left, right)` helper)

LeetCode's follow-up asks for O(1) extra space, so no copy.

1. `k %= n` first. Rotating by `n` changes nothing, and without it `k > n` would make `reverse` read past the end.
2. Reverse the whole array.
3. Reverse the first `k` elements.
4. Reverse the remaining `n - k` elements.

**Why it works:** rotating right by `k` moves the last `k` elements to the front. Reversing everything puts them at the front, but backwards, and the rest backwards too; reversing each part on its own fixes the order inside each part.

Trace for `[1,2,3,4,5,6,7]`, k = 3:

- reverse all → `[7,6,5,4,3,2,1]`
- reverse first 3 → `[5,6,7,4,3,2,1]`
- reverse last 4 → `[5,6,7,1,2,3,4]`

When `k` is `0`, `reverse(nums, 0, -1)` does nothing because `left > right`, so no special case is needed.

**Example:** `[1,2,3,4,5,6,7]`, k = 3 → `[5,6,7,1,2,3,4]`; `[-1,-100,3,99]`, k = 2 → `[3,99,-1,-100]`

## Complexity

| Approach | Time | Extra space |
|---|---|---|
| 1. Copy + index mapping | O(n), two passes | O(n), the copy |
| 2. Three reversals | O(n), each element swapped at most twice | O(1) |

## Run

```bash
npx tsx solution.ts            # Approach 1, TypeScript
node solution.js               # Approach 1, JavaScript
npx tsx solution-optimal.ts    # Approach 2, TypeScript
node solution-optimal.js       # Approach 2, JavaScript
```
