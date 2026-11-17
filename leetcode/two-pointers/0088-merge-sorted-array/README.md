# 88. Merge Sorted Array

**Source:** [LeetCode 88](https://leetcode.com/problems/merge-sorted-array/) · **Topic:** Two Pointers · **Difficulty:** Easy

## Problem

Two arrays are already sorted. `nums1` holds `m` real values followed by `n` empty slots (zeros); `nums2` holds `n` values. Merge `nums2` into `nums1` **in place** so all of `nums1` is sorted, without returning anything. The follow-up asks for O(m + n) time.

## Approach

**Pattern:** two pointers from the back, write the larger value into the last empty slot

1. `p1 = m - 1` (last real value of `nums1`), `p2 = n - 1` (last value of `nums2`); `i` walks from `m + n - 1` down to `0`.
2. If `nums2` is used up (`p2 < 0`), stop: the rest of `nums1` is already in place.
3. If `nums1` still has values and `nums1[p1]` is bigger, write it to `nums1[i]` and move `p1` left; otherwise write `nums2[p2]` and move `p2` left. When `nums1` runs out first, the `else` copies the rest of `nums2`.

**The key idea:** the empty slots are at the end, so filling from the back never overwrites a value I haven't read yet. That's why no copy of `nums1` is needed.

I worked up to this in [practice](../../../problems/arrays/08-merge-sorted-arrays): first copy-then-sort (O((m + n) log(m + n))), then front-to-back two pointers with a copy (O(m) extra space), then this.

My first submission pasted the solution **inside** LeetCode's `var merge = function` template, so the outer `merge` only defined an inner one and never called it; `nums1` stayed unchanged. Removing the wrapper fixed it.

**Example:** `[1,2,3,0,0,0]`, m = 3 + `[2,5,6]`, n = 3 → `[1,2,2,3,5,6]`; `[0]`, m = 0 + `[1]` → `[1]`

## Complexity

- **Time:** O(m + n), each slot written at most once
- **Space:** O(1), only three indexes

## Run

```bash
npx tsx solution.ts   # TypeScript
node solution.js      # JavaScript
```
